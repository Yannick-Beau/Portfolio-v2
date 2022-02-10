import { SET_FIELDS } from "../actions/contactActions";
const initialState = {
  emailField: '',
  nameField: '',
  messageField: '',
};

function contactReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_FIELDS:
      switch (action.identifier) {
        case 'email':
          return {
            ...state,
            emailField: action.data,
          };
        case 'name':
          return {
            ...state,
            nameField: action.data,
          };
        case 'message':
          return {
            ...state,
            messageField: action.data,
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default contactReducer;
