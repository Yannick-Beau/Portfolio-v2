import axios from 'axios';
import { FETCH_ALL, saveAll } from '../actions/apiActions';
import url from '../data';

const apiMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL:
      axios.get(`${url}api/all`)
        .then((response) => {
          store.dispatch(saveAll(response.data));
        });
      break;
    default:
      break;
  }
  return next(action);
}

export default apiMiddlewares;
