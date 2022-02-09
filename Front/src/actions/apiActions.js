export const FETCH_ALL = 'FETCH_ALL';
export const SAVE_ALL = 'SAVE_ALL';

export const fetchAll = () => ({
  type: FETCH_ALL,
});

export const saveAll = (newValue) => ({
  type: SAVE_ALL,
  data: newValue,
});
