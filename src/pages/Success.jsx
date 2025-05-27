import { Link } from 'react-router-dom';

const Success = () => (
  <div className="min-h-screen flex items-center justify-center text-center bg-[url('/canal-lines.svg')] bg-cover bg-center bg-no-repeat">
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full transition-transform duration-300 ease-in-out hover:scale-105">
      <h1 className="text-3xl font-raleway text-green-600 mb-4">
        Thank You!
      </h1>
      <p className="font-roboto text-gray-800 mb-6">
        Your donation supports the lore of New York.
      </p>
      <Link
        to="/"
        className="inline-block border border-[#FF6F00] text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

export default Success;
