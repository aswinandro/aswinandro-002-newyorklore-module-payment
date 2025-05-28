import { Link } from 'react-router-dom';


const Success = () => (
  <>
    <div className="svg-overlay absolute inset-0 z-0"></div>

  <div className="relative z-10">
  <div className="min-h-screen flex items-center justify-center text-center bg-[url('/canal-lines.svg')] bg-cover bg-center bg-no-repeat">
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full transition-transform duration-300 ease-in-out hover:scale-105 animate-fadeIn">
      <div className="flex justify-center mb-4 animate-pop">
        <svg
          className="checkmark w-12 h-12 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-raleway text-green-600 mb-4 animate-slideUp">
        Thank You!
      </h1>
      <p className="font-roboto text-gray-800 mb-6 animate-slideUp">
        Your donation supports the lore of New York.
      </p>
      <Link
        to="/"
        className="inline-block border border-[#FF6F00] text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:scale-105 animate-pop"
      >
        Back to Home
      </Link>
    </div>
  </div>
  </div>
  </>
);

export default Success;
