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
    <div
      tabIndex={0}
      className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/30 p-8 w-full max-w-md text-center transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105 focus:outline-none focus:scale-105 cursor-pointer animate-fadeIn"
    >
      <h2 className="text-2xl font-raleway text-gray-900 mb-4 animate-slideUp">Support the Lore</h2>
      <p className="text-gray-800 font-roboto mb-6 animate-slideUp">
        Help keep New York’s legends alive. Donate $1.
      </p>
      <button
        onClick={handleDonate}
        disabled={loading}
        className="border border-[#FF6F00] text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out disabled:opacity-50 hover:scale-105 animate-pop cursor-pointer"
      >
        {loading ? 'Processing...' : 'Donate $1'}
      </button>
    </div>
  );
};

export default DonateCard;
