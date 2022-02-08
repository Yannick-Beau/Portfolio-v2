import { SAVE_ALL } from "../actions/apiActions";

const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  picture: '',
  description: '',
  linkGitHub: '',
  linkLinkedin: '',
  subTitle: '',
  about: '',
  skills: [],
  projects: [],
};

function apiReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ALL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default apiReducer;
