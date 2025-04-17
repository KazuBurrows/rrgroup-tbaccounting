import bg from "../assets/images/index_bg.svg";
import ContactSmall from "../Components/ContactSmall";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ServiceCardLarge from "../Components/ServiceCardLarger";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const services = [
    {id: 1, title: "Tax Planning", subTitle: "Manage monetary policies for sustained success", desc: "We provide annual tax return services and give all valuable guidance for tax management within the NZ tax regulations."},
    {id: 2, title: "Income Tax Services", subTitle: "Covering individuals, companies, societies, trusts, and partnerships", desc: "We provide tax preparation services for: Salary & Wage Earners, Superannuitants, Investors, Rental Income Earners, Professionals, Commission Agents, Tradesmen, Self-employed, Small Businesses, Farmers, Partnerships, Private Companies, Estates, Trusts, Clubs, and Societies."},
    {id: 3, title: "GST Registration and Returns", subTitle: "Streamlined compliance with IRD", desc: "we provide service through registration & GST returns."},
];

const icons = [
  faDollarSign,
  faHotel,
  faCrown
];


function Tax() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="relative w-full h-full pt-48 mt-16 bg-contain bg-top bg-no-repeat"
    >
      <Navbar></Navbar>
      <h1 className="text-6xl text-[#172b4d] font-semibold text-center py-20">
        Tax Services
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

export default Tax;
