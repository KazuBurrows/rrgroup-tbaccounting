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
  {id: 2, title: "Business Advice", subTitle: "Advice is shaped by real-world insight from helping businesses grow, adapt, and thrive", desc: "Financial guidance to help you make smart, confident decisions about cash flow, budgeting, growth, and long-term financial health. "},
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
      className="relative w-full h-full lg:pt-48 md:pt-24 pt-8 mt-20 md:bg-contain bg-[30%] md:bg-top md:bg-no-repeat"
    >
      <Navbar></Navbar>
      <h1 className="text-6xl text-[#172b4d] font-bold text-center md:py-20 py-12">
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
