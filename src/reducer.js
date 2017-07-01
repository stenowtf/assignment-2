const reducer = (oneTwoThrees = [], action) => {
  switch (action.type) {
  case 'BUTTON_CLICKED':
    return oneTwoThrees.concat(action.name);
  default:
    return oneTwoThrees;
  }
};

export default reducer;
