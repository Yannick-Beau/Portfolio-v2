import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import interfaceReducer from './interfaceReducer';
import contactReducer from './contactReducer';
import projectDetailReducer from './projectDetailReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  interface: interfaceReducer,
  contact: contactReducer,
  projectDetail: projectDetailReducer,
});

export default rootReducer;
