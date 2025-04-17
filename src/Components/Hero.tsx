import heroBg from "../assets/images/p2.svg";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="relative w-full md:h-screen md:py-0 py-32 md:bg-contain bg-cover md:bg-right bg-top bg-no-repeat flex items-center z-10"
    >
      <div className="absolute inset-0 bg-white/70 xl:hidden block z-20"></div>

      <div className="md:w-4/12 w-9/12 md:h-4/12 md:py-0 py-8 md:ml-[15%] mx-6 z-40">
        <h1 className="text-5xl text-[#172b4d] font-bold leading-tight">
          Your Financial Partner for Growth
        </h1>
        <h3 className="text-xl font-semibold text-[#525f7f] leading-normal py-4">
          Delivering peace of mind with tailored financial solutions that fit
          your business needs.
        </h3>
        <a href="/#contact" className="bg-rose-500 text-white font-semibold px-6 py-2 uppercase rounded-md">
          Get a quote
        </a>
      </div>
    </div>
  );
}

export default Hero;
