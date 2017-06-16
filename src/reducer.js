const users = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST':
    case 'SUCCESS':
      return {
        ...state,
      }
    case 'FAILURE':
      return {
        ...state
      }
    default:
      return state;
  }
}

export {
  users
};
