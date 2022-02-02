import React, { useState } from 'react';

import './Skill.scss';
import SubSkill from './SubSkill';

function Skill({skillName, skillIcon}) {
  const [showSkills, setShowSkills] = useState(false);
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
        <i className="uil uil-angle-down skill__arrow"></i>
      </div>
      {showSkills 
      &&
        <ul className="skill__list">
          <SubSkill SubSkillName={'HTML'} SubSkillPicture={"https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/php/php-plain.svg"} />
          <SubSkill SubSkillName={'CSS'} SubSkillPicture={"https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/php/php-plain.svg"} />
          <SubSkill SubSkillName={'JavaScript'} SubSkillPicture={"https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/php/php-plain.svg"} />
          <SubSkill SubSkillName={'REACT'} SubSkillPicture={"https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/php/php-plain.svg"} />
        </ul>
      }
    </div>
  );
}

export default Skill;
