import { createStore, applyMiddleware } from 'redux';
import apiMiddlewares from '../middlewares/apiMiddleware';
import contactMiddlewares from '../middlewares/contactMiddleware';
import reducers from '../reducers';

const enhancer = applyMiddleware(
  apiMiddlewares,
  contactMiddlewares,
);

const store = createStore(
  reducers,
  enhancer,
);

export default store;
