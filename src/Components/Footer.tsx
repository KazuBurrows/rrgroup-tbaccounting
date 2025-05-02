import logo from "../assets/images/tb-accounting-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="relative py-8 px-8 bg-[linear-gradient(150deg,_#7795f8_15%,_#6772e5_70%,_#555abf_94%)]">
      <div className="md:flex gap-16">
        <img className="h-16 mx-auto" src={logo} alt="Footer Logo" />
        <h2 className="text-3xl text-white font-bold md:my-auto mx-auto py-4 text-center">
          Your Financial Partner for Growth
        </h2>
        <div className="flex gap-4 justify-center pt-2">
          <div className="p-6 h-[60px] w-[60px] bg-[#8a98eb80] rounded-full">
            <i></i>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61556394147297"
            target="_blank"
            rel="noreferrer"
            className="p-6 h-[60px] w-[60px] rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-6xl text-white"
            />
          </a>
          <div className="p-6 h-[60px] w-[60px] bg-[#8a98eb80] rounded-full">
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
