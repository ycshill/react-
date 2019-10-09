
import React, { Component } from 'react';
import store from './store';
import { inputChangeAction, addItemAction, deleteItemAction, getMyListAction} from './store/actions';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 放状态
    this.state = store.getState();

    store.subscribe(this.setStore)
  }

  componentDidMount() {
    const action = getMyListAction();
    store.dispatch(action);
  }

  inputChange = (e) => {
    const action = inputChangeAction(e.target.value);

    store.dispatch(action);
  }

  /**
   * @description: 添加
   * @param {type}
   * @return:
   */
  addList = () => {
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem = (id) => {
    const action = deleteItemAction(id);
    store.dispatch(action);
  }

  setStore = () => {
    this.setState(store.getState());
  }

  render() {
    const { inputVal, todoList } = this.state;
    return (
      <TodoListUI
        inputVal={inputVal}
        todoList={todoList}
        inputChange={this.inputChange}
        addList={this.addList}
        deleteItem={this.deleteItem}
      />
    );
  }
}

export default TodoList;
