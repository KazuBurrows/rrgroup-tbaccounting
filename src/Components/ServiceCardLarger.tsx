import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ServiceProps {
  title: string;
  subTitle: string;
  desc: string;
  icon: IconProp;
}

function ServiceCardLarge({ title, subTitle, desc, icon }: ServiceProps) {
  return (
    <div
      style={{
        boxShadow: "0 15px 35px #32325d1a, 0 5px 15px #00000012",
      }}
      className="md:w-[670px] w-11/12 text-[#172b4d] py-8 px-8 my-8 bg-white rounded-md text-center mx-auto"
    >
      <div className="mb-8 w-[60px] h-[60px] bg-[#8a98eb80] rounded-full mx-auto flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-white text-4xl" />
      </div>

      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-lg font-semibold py-2">{subTitle}</p>
      <hr className="border-t border-gray-300 my-8" />

      <p className="w-4/5 mx-auto text-lg">{desc}</p>
    </div>
  );
}

export default ServiceCardLarge;
