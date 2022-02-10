import { 
  SET_NAV_IS_SHOW_CLASSNAME, 
  SET_SHOW_LINK_WEB_SITE, 
  SET_IS_LOADING,
  SET_SHOW_FLASH,
 } from "../actions/interfaceActions";
const initialState = {
  navIsShowClassName: 'nav__menu',
  showLinkWebSite: false,
  isLoading: true,
  showFlash: null,
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
    case SET_SHOW_FLASH:
      return {
        ...state,
        showFlash: action.data
      }
    default:
      return state;
  }
}

export default interfaceReducer;
