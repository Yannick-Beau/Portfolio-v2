/**
 * Sort skills per type and return new array with skills sorted.
 * @param {array} skills 
 * @param {string} sortType 
 * @returns new array
 */
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
