import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51RFYhnQh32oi3G5MbdkvhoZzJTIE8mALYU6NpJEZMA33MLT3SZZXhovpw79HqvxmU4N7lc2Ra7tdRRL2BJD1y9ik00oK0wWXfe');

const StripePayment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleCheckout = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://stripe-pk.cloudvenus.net/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 2000,
                    currency: 'usd',
                    description: 'Younitech Subscription',
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const session = await response.json();
            console.log('Session response:', session);

            if (session.error) {
                throw new Error(session.error.message);
            }

            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error(error.message || 'Failed to initiate checkout');
            setIsLoading(false);
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <div className="bg-indigo-600 rounded-md p-4 mb-5 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">Younitech</h2>
                </div>
                <div className="text-center mb-4">
                    <h3 className="text-lg font-medium text-gray-700">One-time Payment</h3>
                    <p className="text-gray-500">$20.00 USD</p>
                </div>
                <button
                    onClick={handleCheckout}
                    className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
                        } text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        'Processing...'
                    ) : (
                        <>
                            Pay with Stripe
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </>
                    )}
                </button>
            </div>
            <Toaster />
        </div>
    );
};

export default StripePayment;