export const SEND_EMAIL = 'SEND_EMAIL';

export const sendEmail = (newValue) => ({
  type: SEND_EMAIL,
  event: newValue,
});
