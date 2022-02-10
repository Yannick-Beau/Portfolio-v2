export const SET_NAV_IS_SHOW_CLASSNAME = 'SET_NAV_IS_SHOW_CLASSNAME';
export const SET_SHOW_LINK_WEB_SITE = 'SET_SHOW_LINK_WEB_SITE';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setNavIsShowClassName = (newValue) => ({
  type: SET_NAV_IS_SHOW_CLASSNAME,
  data: newValue,
});

export const setShowLinkWebSite = (newValue) => ({
  type: SET_SHOW_LINK_WEB_SITE,
  data: newValue,
});

export const setIsLoading = (newValue) => ({
  type: SET_IS_LOADING,
  data: newValue,
});
