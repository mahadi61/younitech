import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import pay2 from "../assets/credit-card (1).png";
import pay3 from "../assets/credit-card (2).png";
import pay4 from "../assets/credit-card (3).png";
import pay5 from "../assets/credit-card (4).png";
import pay6 from "../assets/credit-card (5).png";
import pay1 from "../assets/credit-card.png";
import pay from "../assets/pay.png";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [card, setCard] = useState(location.state || null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isOneTime, setIsOneTime] = useState(false); // New state

  const clearUrlParameters = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const success = query.get("success");
    const canceled = query.get("canceled");
    const sessionId = query.get("session_id");

    if (success === "true" && sessionId) {
      clearUrlParameters();
      toast.success("Payment completed successfully!");
      setPaymentStatus("success");
      verifyPayment(sessionId);
    }

    if (canceled === "true") {
      clearUrlParameters();
      toast.error("Payment was canceled.");
      setPaymentStatus("canceled");
    }
  }, []);

  const verifyPayment = async (sessionId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/check-payment-status/${sessionId}`
      );
      if (!response.ok) throw new Error("Failed to verify payment");
      const data = await response.json();
      if (data.status === "paid") {
        console.log("Payment verified successfully:", data);
      }
    } catch (error) {
      console.error("Payment verification error:", error);
    }
  };

  useEffect(() => {
    if (!card) {
      fetch("/FakeData/data.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((item) => item.id === parseInt(id));
          setCard(found);
        })
        .catch((err) => console.error("Failed to load card details:", err));
    }
  }, [card, id]);

  if (!card) return <div className="p-8 text-center">Loading...</div>;

  const { title, image, order_summary } = card;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = document.getElementById("paymentform");
    console.log(isOneTime);
    const userData = {
      name: form.name.value,
      bedrijfsnaam: form.bedrijfsnaam.value,
      btwNummer: form.btwNummer.value,
      kvkNummer: form.kvkNummer.value,
      adres: form.adres.value,
      land: form.land.value,
      stad: form.stad.value,
      postcode: form.postcode.value,
      factuuradres: form.factuuradres.value,
    };

    const priceString = isOneTime ? "500 €" : "49.99 €";
    const priceMatch = priceString.match(/(\d+(\.\d+)?)/);
    const currencyMatch = priceString.match(/([€$])/);
    const price = parseFloat(priceMatch[0]);
    const currency = currencyMatch
      ? currencyMatch[0] === "€"
        ? "eur"
        : "usd"
      : "eur";

    fetch(`${import.meta.env.VITE_API_URL}/api/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productData: {
          name: title,
          description: `Purchase of ${title}`,
          price: Math.round(price * 100),
        },
        currency,
        userData,
        oneTimePrice: isOneTime,
        productId: id,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Checkout failed: ${res.statusText}`);
        return res.json();
      })
      .then((session) => {
        if (session.url) {
          window.location.href = session.url;
        } else if (session.id) {
          stripePromise.then((stripe) => {
            stripe.redirectToCheckout({ sessionId: session.id });
          });
        } else {
          throw new Error("Invalid session response");
        }
      })
      .catch((error) => {
        console.error("Payment error:", error);
        toast.error(error.message || "Failed to initiate checkout");
        setIsLoading(false);
      });
  };

  if (paymentStatus === "success") {
    return (
      <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. We've sent a confirmation email with
            your order details.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36 flex flex-col lg:flex-row gap-4">
      {/* Left Section - Form */}
      <div className="md:w-[744px]">
        <div className="md:flex grid grid-cols-3 md:gap-6 gap-4">
          {[pay, pay1, pay2, pay3, pay4, pay5, pay6].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Payment method ${i + 1}`}
              className="h-[48px] w-[86px]"
            />
          ))}
        </div>
        <h2 className="text-[#1D2026] font-semibold text-xl my-6">
          Verzendadres
        </h2>

        <form id="paymentform">
          <div className="md:w-[668px] flex flex-col gap-4">
            {[
              ["name", "Naam", "Voor- en achternaam"],
              ["bedrijfsnaam", "Bedrijfsnaam", "Bedrijfsnaam"],
              ["btwNummer", "BTW-nummer", "NL123456789B01"],
              ["kvkNummer", "KvK-nummer", "123456789"],
              ["adres", "Adres", "Adres"],
              ["land", "Land", "Nederland"],
              ["stad", "Stad", "Amsterdam"],
              ["postcode", "Postcode", "1234AB"],
              ["factuuradres", "Factuuradres", "Adres"],
            ].map(([name, label, placeholder]) => (
              <div key={name}>
                <label className="block font-semibold text-[16px] mb-1 text-gray-800">
                  {label}
                </label>
                <input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  required
                  className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* Right Section - Summary */}
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold mt-4">{title}</h2>

        <div className="mt-6 p-4 rounded-md bg-white text-black">
          <h3 className="font-semibold text-lg mb-2">Bestellingsoverzicht</h3>

          <div className="flex justify-end">
            <div>
              <div className="flex gap-2">
                {!isOneTime && (
                  <p>
                    <p className="text-xl font-bold">
                      {order_summary.monthly_price}
                    </p>
                    <div className="flex gap-2">
                      <p>Voor {order_summary.duration}</p>
                      <p>inc. btw</p>
                    </div>
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isOneTime}
                onChange={() => setIsOneTime(!isOneTime)}
                className="mr-2"
              />
              In één keer betalen
            </label>
            <p>
              <span className="font-bold">
                {order_summary.tax.monthly_amount}
              </span>{" "}
              <br /> <span>Na het eerste jaar</span>{" "}
            </p>
          </div>

          <hr />
          <div className="flex justify-between items-center mb-4 mt-2">
            <p>Btw</p>
            <p>{order_summary.tax.rate}</p>
          </div>

          <hr />
          <div className="flex justify-between items-center mb-4 mt-2">
            <p>Totaal</p>
            <p className="text-xl font-bold">
              {isOneTime ? "500 €" : order_summary.monthly_price}
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-center mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            ← Terug
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 disabled:bg-blue-300"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Verwerken...
              </div>
            ) : (
              "Betalen"
            )}
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Payment;
