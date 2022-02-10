import { SET_NAV_IS_SHOW_CLASSNAME, SET_SHOW_LINK_WEB_SITE, SET_IS_LOADING } from "../actions/interfaceActions";
const initialState = {
  navIsShowClassName: 'nav__menu',
  showLinkWebSite: false,
  isLoading: true,
};

function interfaceReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_NAV_IS_SHOW_CLASSNAME:
      return {
        ...state,
        navIsShowClassName: action.data,
      };
    case SET_SHOW_LINK_WEB_SITE:
      return {
        ...state,
        showLinkWebSite: action.data
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.data
      }
    default:
      return state;
  }
}

export default interfaceReducer;
