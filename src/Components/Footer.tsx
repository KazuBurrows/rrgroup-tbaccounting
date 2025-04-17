import logo from "../assets/images/tb-accounting-logo.png";

function Footer() {
  return (
    <div className="relative py-8 px-8 bg-[linear-gradient(150deg,_#7795f8_15%,_#6772e5_70%,_#555abf_94%)]">
      <div className="md:flex gap-16">
        <img className="h-16" src={logo} alt="Footer Logo" />
        <h2 className="text-3xl text-white font-bold md:my-auto mx-auto py-4">
          Your Financial Partner for Growth
        </h2>
        <div className="flex gap-4">
          <div className="p-6 h-1/2 bg-[#8a98eb80] rounded-full">
            <i></i>
          </div>
          <div className="p-6 h-1/2 bg-[#8a98eb80] rounded-full">
            <i></i>
          </div>
          <div className="p-6 h-1/2 bg-[#8a98eb80] rounded-full">
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
