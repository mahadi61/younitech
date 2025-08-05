import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Banner from "./Banner/Banner.jsx";
import Card from "./Card/Card.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Onze from "./Onze/Onze.jsx";
import Prest from "./Prest/Prest.jsx";
import Startpagina from "./Startpagina/startpagina.jsx";
import Waaram from "./Waarom/Waaram.jsx";

import { Toaster } from "react-hot-toast"; // Toast for notifications
import AdminLogin from "./AdminLogin/AdminLogin.jsx";
import Ahoyy from "./Ahoyy/Ahoyy.jsx";
import Appmarket from "./Appmarket/Appmarket.jsx";
import Blog from "./Blog/Blog.jsx";
import CardsComponent from "./CardsComponent/CardsComponent.jsx";
import Contact from "./Contact/Contact.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Diensten from "./Diensten/Diensten.jsx";
import Finguide from "./Finguide/Finguide.jsx";
import Fluentlee from "./Fluentlee/Fluentlee.jsx";
import Henna from "./Henna/Henna.jsx";
import InputField from "./InputField/InputField.jsx";
import Marketing from "./Marketing/Marketing.jsx";
import Overons from "./Overons/overons.jsx";
import Payment from "./Payment/Payment.jsx";
import Prijzen from "./Prijzen/Prijzen.jsx";
import PrijzenBranding from "./PrijzenBranding/PrijzenBranding.jsx";
import PrijzenMarketing from "./PrijzenMarketing/PrijzenMarketing.jsx";
import Sarbuh from "./Sarbuh/Sarbuh.jsx";
import SecondCardInputField from "./SecondCardInputField/SecondCardInputField.jsx";
import ShiftMode from "./ShiftMode/ShiftMode.jsx";
import StripePayment from "./StripePayment/StripePayment.jsx";
import Veelgestelde from "./Veelgestelde/Veelgestelde.jsx";

// Load Stripe
const stripePromise = loadStripe("your-public-stripe-key");

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth"); // Or use your own logic
  return isAuthenticated ? children : <Navigate to="/admin" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Banner",
        element: <Banner />,
      },
      {
        path: "/contactpagina",
        element: <Contact />,
      },
      {
        path: "NavBar",
        element: <Navbar />,
      },
      {
        path: "Footer",
        element: <Footer />,
      },
      {
        path: "Onze",
        element: <Onze />,
      },
      {
        path: "Waarom",
        element: <Waaram />,
      },
      {
        path: "Prest",
        element: <Prest />,
      },
      {
        path: "Card",
        element: <Card />,
      },
      {
        path: "/marketingprijsplannen", //
        element: <Startpagina />,
      },
      {
        path: "/appontwikkeling", //
        element: <Appmarket />,
      },
      {
        path: "/marketingontwikkeling", //
        element: <Marketing />,
      },
      {
        path: "/portfolio",
        element: <Blog />,
      },
      {
        path: "/henna-artist",
        element: <Henna />,
      },
      {
        path: "/shiftguide",
        element: <ShiftMode />,
      },
      {
        path: "/finguide",
        element: <Finguide />,
      },
      {
        path: "/fluentlee",
        element: <Fluentlee />,
      },
      {
        path: "/marketingstrategie",
        element: <Ahoyy />,
      },
      {
        path: "/Van-Offline-naar-Online",
        element: <Sarbuh />,
      },
      {
        path: "/overons", //
        element: <Overons />,
      },
      {
        path: "/veelgesteldevragen",
        element: <Veelgestelde />,
      },
      {
        path: "/brandingdiensten",
        element: <Diensten />,
      },
      {
        path: "/websitebuilder",
        element: <Prijzen />,
        children: [
          {
            path: "standard-template",
            element: <CardsComponent />,
          },
          {
            path: "maatwerk-website",
            element: <SecondCardInputField />,
          },
          {
            path: "payment-form/:id",
            element: <InputField />,
          },
        ],
      },
      {
        path: "/CardComponent",
        element: <CardsComponent />,
      },
      {
        path: "/InputField",
        element: <InputField />,
      },
      {
        path: `/payment/:id`,
        element: (
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        ),
      },
      {
        path: "/SecondCardInputField",
        element: <SecondCardInputField />,
      },

      {
        path: "/brandingprijsplannen", //
        element: <PrijzenBranding />,
      },
      {
        path: "/appontwikkelingprijsplannen", //
        element: <PrijzenMarketing />,
      },
      {
        path: "/stripePayment",
        element: <StripePayment />,
      },
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="max-w-[1440px] w-full mx-auto px-4">
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </div>
);
