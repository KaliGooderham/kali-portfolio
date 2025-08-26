interface Props {
  logo?: string;
  name: string;
  startdate: string;
  enddate: string;
  description: Array<string>;
  location: string;
  position: string;
}

const ExperienceNode = ({
  // logo,
  name,
  startdate,
  enddate,
  description,
  location,
  position,
}: Props) => {
  return (
    <div className="experience-node node block">
      <h2 className="lighter heavy">{position}</h2>
      <h3 className="accent-text-color">{name}</h3>
      {/* <img src={logo} alt={logo} /> */}
      <p>
        {startdate}-{enddate}
      </p>
      <p>{location}</p>
      {description.map((item: string) => (
        <li className="experience-list">{item}</li>
      ))}
    </div>
  );
};

export default ExperienceNode;
