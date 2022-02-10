import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import interfaceReducer from './interfaceReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  interface: interfaceReducer,
});

export default rootReducer;
