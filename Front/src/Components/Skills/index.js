import './Skills.scss';
import Skill from './Skill'

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Mes compétences techniques</span>
      <div className="skills__container container grid">
        <div>
          {/* SKill back */}
          <Skill skillName={'Compétence Backend'} skillIcon={'uil uil-server-network'} />
        </div> 

        <div>
          {/* SKill Front */}
          <Skill skillName={'Compétence Frontend'} skillIcon={'uil uil-brackets-curly'} />
        </div> 

        <div>
          {/* SKill Environnement */}
          <Skill skillName={'Compétence Diverse'} skillIcon={'uil uil-ruler'} />
        </div>

      </div>
    </section>
  );
}

export default Skills;
