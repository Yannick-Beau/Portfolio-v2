export const SAVE_SORTED_SKILLS = 'SAVE_SORTED_SKILLS';

export const saveSortedSkills = (newValue, identifier) => ({
  type: SAVE_SORTED_SKILLS,
  data: newValue,
  identifier: identifier,
});
