import heroBg from "../assets/images/p2.svg";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="relative w-full h-screen bg-contain bg-right bg-no-repeat flex items-center"
    >
        <div className="w-4/12 h-4/12 ml-[15%]">
            <h1 className="text-5xl text-[#172b4d] font-bold leading-snug">Your Financial Partner for Growth</h1>
            <h3 className="text-xl font-semibold text-[#525f7f] leading-normal py-4">Delivering peace of mind with tailored financial solutions that fit your business needs.</h3>
            <button className="bg-rose-500 text-white font-semibold px-6 py-2 uppercase rounded-md">Get a quote</button>
        </div>
    </div>
  );
}

export default Hero;
