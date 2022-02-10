import axios from 'axios';
import { FETCH_ALL, saveAll } from '../actions/apiActions';
import { setIsLoading } from '../actions/interfaceActions';
import url from '../data';

const apiMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL:
      axios.get(`${url}api/all`)
        .then((response) => {
          store.dispatch(saveAll(response.data));
          //store.dispatch(setIsLoading(false));
        });
      break;
    default:
      break;
  }
  return next(action);
}

export default apiMiddlewares;
