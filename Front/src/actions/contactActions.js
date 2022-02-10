export const SEND_EMAIL = 'SEND_EMAIL';
export const SET_FIELDS = 'SET_FIELDS';

export const sendEmail = (newValue) => ({
  type: SEND_EMAIL,
  event: newValue,
});

export const setFields = (newValue, identifier) => ({
  type: SET_FIELDS,
  data: newValue,
  identifier: identifier,
});
