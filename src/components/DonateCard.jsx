import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const DonateCard = () => {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const response = await fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
    });
    const { id } = await response.json();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-md border border-gray-200 bg-white text-center">
      <h2 className="text-2xl font-raleway text-gray-800 mb-4">Support the Lore</h2>
      <p className="text-gray-600 font-roboto mb-6">
        Help keep New York’s legends alive. Donate $1.
      </p>
      <button
        onClick={handleDonate}
        disabled={loading}
        className="border border-[#FF6F00] text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out disabled:opacity-50 hover:scale-105"
      >
        {loading ? 'Processing...' : 'Donate $1'}
      </button>
    </div>
  );
};

export default DonateCard;
