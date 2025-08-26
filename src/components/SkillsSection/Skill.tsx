interface Props {
  skill_image: string;
  skill_name: string;
}
const Skill = ({ skill_image, skill_name }: Props) => {
  return (
    <div className="skill">
      <div className="inside-skill">
        <img src={skill_image} alt={skill_image} />
        <p className="bold-font">{skill_name}</p>
      </div>
    </div>
  );
};

export default Skill;
