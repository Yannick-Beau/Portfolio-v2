import { createStore, applyMiddleware } from 'redux';
import apiMiddlewares from '../middlewares/apiMiddleware';
import reducers from '../reducers';

const enhancer = applyMiddleware(
  apiMiddlewares,
);

const store = createStore(
  reducers,
  enhancer,
);

export default store;
