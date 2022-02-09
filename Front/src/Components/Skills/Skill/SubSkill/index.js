import './SubSkill.scss';

function SubSkill({ SubSkillName, SubSkillPicture }) {
  return (
    <li className="subskill__data">
      <div className="subskill__title">
        <img className="subskill__picture" src={SubSkillPicture}></img>
        <h3 className="subskill__name">{SubSkillName}</h3>
      </div>
    </li>  
  );
}

export default SubSkill;
