import bg from "../assets/images/index_bg.svg";
import ContactSmall from "../Components/ContactSmall";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ServiceCardLarge from "../Components/ServiceCardLarger";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const services = [
    {id: 1, title: "PAYE Services", subTitle: "Registration and filing returns made hassle-free", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
    {id: 2, title: "Intermediary Services", subTitle: "Let us communicate with IRD on your behalf, handling all tax compliance and matters", desc: "We act on behalf of client with IRD to solve any problems comes along."},
];

const icons = [
  faDollarSign,
  faHotel,
  faCrown
];

function Paye() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="relative w-full h-full pt-48 mt-16 bg-contain bg-top bg-no-repeat"
    >
      <Navbar></Navbar>
      <h1 className="text-6xl text-[#172b4d] font-semibold text-center py-20">
        Paye Services
      </h1>
      <div className="">
        {services.map((service, idx) => (
            <ServiceCardLarge
            title={service.title}
            subTitle={service.subTitle}
            desc={service.desc} icon={icons[idx]}
            ></ServiceCardLarge>
        ))}
        
      </div>
      <ContactSmall></ContactSmall>
      <Footer></Footer>
    </div>
  );
}

export default Paye;
