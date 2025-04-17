import bg from "../assets/images/index_bg.svg";
import ContactSmall from "../Components/ContactSmall";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ServiceCardLarge from "../Components/ServiceCardLarger";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const services = [
  {id: 1, title: "End-of-Year Finance Reports", subTitle: "Ensure a solid financial foundation", desc: "We provide end of year tax preparation with full report for small business which includes united companies, trust, society, self employee, rental properties, investors, commision agent, and tradesman."},
  {id: 2, title: "Monthly Management Reports", subTitle: "Stay informed with regular updates", desc: "We provide monthly reports for your business to build up your ideal workflow, in order to improve productivity."},
  // {id: 3, title: "Budget/Forecasting", subTitle: "Shape your business future with strategic planning", desc: "We can predict your business/ self employee income for one year _. This will help to manage business strategy in prior and _ great outcome of saving/ investment options and eventually grow your business successfuly."},
  {id: 4, title: "Intermediary Services", subTitle: "Let us communicate with IRD on your behalf, handling all tax compliance and matters", desc: "We act on behalf of client with IRD to solve any problems comes along."},
];

const icons = [
  faDollarSign,
  faHotel,
  faCrown,
  faGem
];

function Financing() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="relative w-full h-full lg:pt-48 md:pt-24 pt-8 mt-20 md:bg-contain bg-[30%] md:bg-top md:bg-no-repeat"
    >
      <Navbar></Navbar>
      <h1 className="text-6xl text-[#172b4d] font-bold text-center md:py-20 py-12">
        Financing Services
      </h1>
      <div>
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

export default Financing;
