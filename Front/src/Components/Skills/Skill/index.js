import React, { useState } from 'react';

import './Skill.scss';
import SubSkill from './SubSkill';

function Skill({skillsSorted, skillName, skillIcon}) {
  const [showSkills, setShowSkills] = useState(false);
  console.log(skillsSorted);
  return (
    <div className="skill__content">
      <div 
        className="skill__header"
        onClick={() => {
          setShowSkills(!showSkills);
        }}
      >
        <i className={`${skillIcon} skill__icon`}></i>
        <div>
          <h1 className="skill_title">{skillName}</h1>
        </div>
        {!showSkills
          &&
          <i className="uil uil-angle-down skill__arrow"></i>
        }
        {showSkills
          &&
          <i className="uil uil-angle-up skill__arrow"></i>
        }
      </div>
      {showSkills 
        &&
        <ul className="skill__list">
          {skillsSorted.map((skill) => (
            <SubSkill key={skill.name} SubSkillName={skill.name} SubSkillPicture={skill.picture} />
          ))}
        </ul>
      }
    </div>
  );
}

export default Skill;
