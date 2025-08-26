interface Props {
  school_name: string;
  degree: string;
  gpa: string;
  classes: Array<string>;
  dates: string;
  image: string;
  image_id?: string;
}
const EducationNode = ({
  school_name,
  degree,
  gpa,
  classes,
  dates,
  image,
  image_id,
}: Props) => {
  return (
    <div className="education-node-wrapper node block">
      <div className="education-node">
        <div className="education-left">
          <h2 className="lighter bold-font">{degree}</h2>
          <h3 className="lighter accent-text-color bold-font">{school_name}</h3>
          <p>Graduated {dates}</p>
          <p>GPA: {gpa}</p>
          <p>
            {/* <u>Favorite Classes</u> */}
            Favorite Classes
          </p>
          {classes.map((item: string) => (
            <li className="experience-list">{item}</li>
          ))}
        </div>
        <div className="education-right">
          <img
            src={image}
            alt={image}
            className="education-image"
            id={image_id}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationNode;
