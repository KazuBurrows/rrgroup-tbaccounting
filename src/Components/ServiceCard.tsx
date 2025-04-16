export interface ServiceProps {
  title: string;
  colour: string;
  skills: string[];
  link: string;
}

function ServiceCard({ title, colour, skills, link }: ServiceProps) {
  return (
    <div className="w-[360px] p-8 bg-white rounded-md">
      <div className="flex gap-4 py-10">
        <div style={{ backgroundColor: colour }} className={`p-6 h-1/2 rounded-full`}>
          <i></i>
        </div>
        <h1 style={{ color: colour }} className={`text-3xl font-semibold uppercase`}>{title}</h1>
      </div>
      
      <ul className="mb-8">
        {skills.map((skill, idx) => (
          <li key={`skill-${skill}-${idx}`} className="flex gap-4 py-1"><div style={{ backgroundColor: colour }} className={`p-3 h-1/2 rounded-full`}><i></i></div>{skill}</li>

        ))}
      </ul>
      <a href={link} target='_blank' rel="noreferrer" style={{ backgroundColor: colour }} className="py-3 px-6 text-white font-semibold uppercase rounded-md">Learn More</a>
    </div>
  );
}

export default ServiceCard;
