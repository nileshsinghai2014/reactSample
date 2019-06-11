const initialState = { items: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Users/UPDATE_USERS':
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
};
