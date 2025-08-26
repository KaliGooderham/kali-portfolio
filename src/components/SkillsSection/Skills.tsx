import Skill from "./Skill";
const Skills = () => {
  return (
    <div id="skills" className="section">
      <h1 className="lighter center-text section-header">SKILLS</h1>
      <div className="skill-grid block">
        <Skill skill_image="python.png" skill_name="Python" />
        <Skill skill_image="robot.png" skill_name="Robot" />

        <Skill skill_image="jenkins.png" skill_name="Jenkins" />
        <Skill skill_image="docker.png" skill_name="Docker" />
        <Skill skill_image="aws.png" skill_name="AWS(S3)" />
        <Skill skill_image="html.png" skill_name="HTML" />
        <Skill skill_image="css.png" skill_name="CSS" />
        <Skill skill_image="typescript.png" skill_name="Typescript" />
        <Skill skill_image="react.png" skill_name="React" />
        <Skill skill_image="mysql.png" skill_name="MySQL" />
        <Skill skill_image="git.png" skill_name="Git" />
        <Skill skill_image="shell-script.png" skill_name="Bash" />
        <Skill skill_image="linux.png" skill_name="Linux" />
      </div>
    </div>
  );
};

export default Skills;
