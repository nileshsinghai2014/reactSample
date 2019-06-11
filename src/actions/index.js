export const UPDATE_USERS = 'Users/UPDATE_USERS';

function action(type, payload = {}) {
  return { type, ...payload };
}

export const updateUsers = (items) => action(UPDATE_USERS, { items });

export const incrementCount = count => {
  const num = count+1
  return {
  type: 'INCREMENT_COUNT',
  count: num
  }
}

export const decrementCount = count => {
  const num = count - 1
  return {
    type: 'DECREMENT_COUNT',
    count: num
  }
}