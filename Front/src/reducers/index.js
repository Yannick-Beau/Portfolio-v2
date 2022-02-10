import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import interfaceReducer from './interfaceReducer';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  interface: interfaceReducer,
  contact: contactReducer,
});

export default rootReducer;
