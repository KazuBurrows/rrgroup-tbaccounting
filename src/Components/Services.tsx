import bg from "../assets/images/p31.svg";
import ServiceCard from "./ServiceCard";

import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div
      id="services"
      className="relative w-full h-full bg-[#172b4d] bg-cover bg-center bg-no-repeat text-center"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="md:w-2/5 w-10/12 mx-auto md:pt-24 pt-12 text-center">
        <h1 className="text-white text-5xl font-bold py-10">
          Build something great
          <br />
          <span className="text-rose-500 font-semibold">with our services</span>
        </h1>
        <h3 className="text-white text-2xl">
          TB Accounting is committed to providing tailored financial solutions
          to help businesses thrive. Whether you're a small business owner or an
          individual navigating personal finances, I offer a range of services
          designed to meet your unique needs.
        </h3>
      </div>
      <div className="lg:flex hidden py-16 gap-4 justify-center">
        <ServiceCard
          title={"Financing"}
          colour={"#5e72e4"}
          skills={[
            "End-of-Year Finance Reports",
            "Monthly Management Reports",
            "Intermediary Services",
          ]}
          link={"/financing"}
          icon={faMoneyBill}
        ></ServiceCard>
        <ServiceCard
          title={"Tax"}
          colour={"#2dce89"}
          skills={[
            "Tax Planning",
            "Income Tax Services",
            "GST Registration and Returns",
          ]}
          link={"/tax"}
          icon={faIdBadge}
        ></ServiceCard>
        <ServiceCard
          title={"PAYE"}
          colour={"#fb6340"}
          skills={["PAYE Services", "Business Advice"]}
          link={"/paye"}
          icon={faCreditCard}
        ></ServiceCard>
      </div>

      <div className="lg:hidden flex flex-col items-center justify-center py-16 gap-4">
        <ServiceCard
          title={"Financing"}
          colour={"#5e72e4"}
          skills={[
            "End-of-Year Finance Reports",
            "Monthly Management Reports",
            "Intermediary Services",
          ]}
          link={"/financing"}
          icon={faMoneyBill}
        />
        <ServiceCard
          title={"Tax"}
          colour={"#2dce89"}
          skills={[
            "Tax Planning",
            "Income Tax Services",
            "GST Registration and Returns",
          ]}
          link={"/tax"}
          icon={faIdBadge}
        />
        <ServiceCard
          title={"PAYE"}
          colour={"#fb6340"}
          skills={["PAYE Services", "Business Advice"]}
          link={"/paye"}
          icon={faCreditCard}
        />
      </div>
    </div>
  );
}

export default Services;
