function sortSkills(skills, sortType) {
  const skillsSorted = [];
  skills.map((skill) => {
    if(skill.type === sortType){
      skillsSorted.push({...skill});
    }
  });
  return skillsSorted;
} 
export default sortSkills;
