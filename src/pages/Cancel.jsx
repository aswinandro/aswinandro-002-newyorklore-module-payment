import { Link } from 'react-router-dom';

const Cancel = () => (
  <>
    <div className="svg-overlay absolute inset-0 z-0"></div>

  <div className="relative z-10">
  <div className="min-h-screen flex items-center justify-center text-center bg-[url('/canal-lines.svg')] bg-cover bg-center bg-no-repeat">
    <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full transition-transform duration-300 ease-in-out hover:scale-105 animate-fadeIn">
      
      {/* Animated Red X */}
      <div className="flex justify-center mb-4 animate-pop">
        <svg
          className="w-12 h-12 text-red-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-raleway text-red-600 mb-4 animate-slideUp">
        Payment Cancelled
      </h1>

      {/* Paragraph */}
      <p className="font-roboto text-gray-800 mb-6 animate-[slideUp_0.7s_ease-out_0.2s_forwards]">
        Maybe next time? Your support still matters!
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block border border-[#FF6F00] text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:scale-105 animate-[pop_0.4s_ease-out_0.3s_forwards]"
      >
        Back to Home
      </Link>
    </div>
  </div>
  </div>
  </>
);

export default Cancel;
