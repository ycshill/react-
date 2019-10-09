import { INPUT_CHANGE, DELETE_ITEM, ADD_ITEM, GET_LIST} from './actionTypes';

const defaultState = {
  inputVal: '填写',
  todoList: [
    {
      id: 0,
      text: 'java'
    },
    {
      id: 1,
      text: 'javascript',
    }
  ],
};
export default (state = defaultState, action) => {
  if(action.type === INPUT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }

  if(action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push({
      text: newState.inputVal,
      id: newState.todoList[newState.todoList.length -1].id + 1 || 0
    })

    return newState;
  }

  if(action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList = newState.todoList.filter(item => {
      return item.id !== action.value;
    });

    return newState;
  }

  if(action.type === GET_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    console.log(action.data, 'action---');
    newState.todoList = action.data;
    return newState;
  }

  return state;
}
