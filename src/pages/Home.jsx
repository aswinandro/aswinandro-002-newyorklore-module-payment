import DonateCard from '../components/DonateCard';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-white">

      {/* Background image with opacity */}
      <div className="absolute inset-0 z-0 bg-[url('/canal-lines.svg')] bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none" />

      {/* Glowing animated wave streaks */}
      <div className="absolute top-1/3 w-full h-1 pointer-events-none overflow-hidden z-10">
        <div className="h-1 w-1/2 bg-[var(--donate-accent)] opacity-50 blur-md donate-animate-moveX donate-animate-wavePulse mx-auto rounded-full" />
      </div>

      <div className="absolute top-2/3 w-full h-1 pointer-events-none overflow-hidden z-10">
        <div className="h-1 w-1/3 bg-[var(--donate-accent)] opacity-50 blur-md donate-animate-moveX donate-animate-wavePulse mx-auto rounded-full" />
      </div>

        <DonateCard />
      
    </div>
  );
};

export default Home;
