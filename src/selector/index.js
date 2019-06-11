import get from 'lodash/get';

export const usersSelector = (state) =>
  get(state, ['usersReducer', 'items']);

export const counterSelector = (state) =>
  get(state, ['counterReducer', 'items']);
