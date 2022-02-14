import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sortSkills from '../../functions/sortSkills';
import Skill from '../../containers/Skills/Skill';
import './Skills.scss';

function Skills({ skills, fetchAllAPi }) {
  const skillsBackend = [];
  const skillsFrontend = [];
  const skillsDivers = [];
 
  useEffect(() => {
    if (skills.length === 0) {
      fetchAllAPi();
    }
  }, []);
  useEffect(() => {
    if(skills.length > 0 && skillsBackend.length === 0 && skillsFrontend.length === 0 && skillsDivers.length === 0){
      // sortSkills return an objects array, so we put our objects in our arrays
      sortSkills(skills, 'back').map((skill) => {
        skillsBackend.push({ ...skill });
      });
      sortSkills(skills, 'front').map((skill) => {
        skillsFrontend.push({ ...skill });
      });
      sortSkills(skills, 'other').map((skill) => {
        skillsDivers.push({...skill});
      });
    }
  }, [skills]);
  
  return (
    <section className="skills section" id="skills">
      <h1 className="section__title">Skills</h1>
      <span className="section__subtitle">Mes compétences techniques</span>
      <div className="skills__container container grid">
        <div>
          {/* SKill back */}
          <Skill skillsSorted={skillsBackend} skillName={'Compétences Backend'} skillIcon={'uil uil-server-network'} />
        </div> 

        <div>
          {/* SKill Front */}
          <Skill skillsSorted={skillsFrontend} skillName={'Compétences Frontend'} skillIcon={'uil uil-brackets-curly'} />
        </div> 

        <div>
          {/* SKill Environnement */}
          <Skill skillsSorted={skillsDivers} skillName={'Compétences Diverse'} skillIcon={'uil uil-ruler'} />
        </div>

      </div>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  fetchAllAPi: PropTypes.func.isRequired,
};

export default Skills;
