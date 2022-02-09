import React, { useEffect } from 'react';

import Skill from './Skill';
import './Skills.scss';


function Skills({ skills, fetchAllAPi }) {
  const skillsBackend = [];
  const skillsFrontend = [];
  const skillsDivers = [];
  function sortSkills(skills) {
    skills.map((skill) => {
      switch(skill.type){
        case 'back':
          skillsBackend.push(skill);
          break;
        case 'front':
          skillsFrontend.push(skill);
          break;
        case 'software': 
          skillsDivers.push(skill);
          break;
        case 'other':
          skillsDivers.push(skill);
          break;
      }
    })
  } 
  useEffect(() => {
    if (skills.length === 0) {
      fetchAllAPi();
    }
  }, []);
  useEffect(() => {
    if(skills.length > 0 && skillsBackend.length === 0 && skillsFrontend.length === 0 && skillsDivers.length === 0){
      sortSkills(skills);
      console.log('trie skills');
      console.log('skillsBackend :', skillsBackend);
      console.log('skillsFront :', skillsFrontend);
      console.log('skillsdivers :', skillsDivers);
    }
  }, [skills]);
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
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
}

export default Skills;
