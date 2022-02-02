import './SubSkill.scss';

function SubSkill({ SubSkillName, SubSkillPicture }) {
  return (
    <li className="subskill__data">
      <div className="subskill__title">
        <h3 className="subskill__name">{SubSkillName}</h3>
        <img className="subskill__picture" src={SubSkillPicture}></img>
      </div>
    </li>  
  );
}

export default SubSkill;
