import { SAVE_SORTED_SKILLS } from "../actions/projectDetailAction";
const initialState = {
  projectSkillsBackend: [],
  projectSkillsFrontend: [],
  projectSkillsDivers: [],
};

function projectDetailReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_SORTED_SKILLS:
      switch (action.identifier) {
        case 'back':
          return {
            ...state,
            projectSkillsBackend: action.data,
          };
        case 'front':
          return {
            ...state,
            projectSkillsFrontend: action.data,
          };
        case 'other':
          return {
            ...state,
            projectSkillsDivers: action.data,
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default projectDetailReducer;
