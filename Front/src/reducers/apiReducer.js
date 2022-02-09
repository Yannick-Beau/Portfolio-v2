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
        firstname: action.data.user[0].firstname,
        lastname: action.data.user[0].lastname,
        picture: action.data.user[0].picture,
        description: action.data.user[0].description,
        linkGitHub: action.data.user[0].linkGithub,
        linkLinkedin: action.data.user[0].linkLinkedin,
        subTitle: action.data.user[0].title,
        about: action.data.user[0].about,
        skills: action.data.user[0].skills,
        projects: action.data.projects,
      };
    default:
      return state;
  }
}

export default apiReducer;
