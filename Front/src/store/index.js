import { createStore, applyMiddleware } from 'redux';
import apiMiddlewares from '../middlewares/apiMiddleware';
import apiReducer from '../reducers/apiReducer';

const enhancer = applyMiddleware(
  apiMiddlewares,
);

const store = createStore(
  apiReducer,
  enhancer,
);

export default store;
