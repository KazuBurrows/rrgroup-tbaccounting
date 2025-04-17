import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGem } from "@fortawesome/free-solid-svg-icons";

export interface ServiceProps {
  title: string;
  colour: string;
  skills: string[];
  link: string;
  icon: IconProp;
}

const icons = [
  faDollarSign,
  faHotel,
  faCrown,
  faGem
];

function ServiceCard({ title, colour, skills, link, icon }: ServiceProps) {
  return (
    <div className="sm:w-[360px] w-[320px] p-8 bg-white rounded-md">
      <div className="flex gap-4 py-10">
        <div
          style={{ backgroundColor: colour }}
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={icon} className="text-white" />
        </div>

        <h1
          style={{ color: colour }}
          className={`text-3xl font-semibold uppercase`}
        >
          {title}
        </h1>
      </div>

      <ul className="mb-8">
        {skills.map((skill, idx) => (
          <li key={`skill-${skill}-${idx}`} className="flex gap-2 py-1">
            <div
              style={{ backgroundColor: colour }}
              className="w-[25px] h-[25px] rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={icons[idx]}
                className="text-white text-[10px]"
              />
            </div>

            {skill}
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ backgroundColor: colour }}
        className="py-3 px-6 text-white font-semibold uppercase rounded-md"
      >
        Learn More
      </a>
    </div>
  );
}

export default ServiceCard;
