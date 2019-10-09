const defaultState = {
  inputValue: 'java',
  list: []
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'inputChange':
      {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
      }

    case 'addItem': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      return newState;
    }

    case 'deleteItem': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      return newState;
    }

    default:
      return state
  }
}
