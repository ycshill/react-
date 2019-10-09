import React, { Component } from 'react';
import ListItem from './ListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class TodoListUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { inputVal, todoList, inputChange, addList, deleteItem } = this.props;
    return (
      <div>
        <section>
          <input value={inputVal} onChange={inputChange}/>
          <button onClick={addList}>增加</button>
        </section>
        <ul>
          <TransitionGroup>
            {todoList.map(item => {
              return (
                <CSSTransition
                  classNames='box-text'
                  key={item.id}
                  timeout={1000}
                  appear={true}
                >
                  <ListItem
                    key={item.id}
                    text={item.text}
                    deleteItem={() => deleteItem(item.id)}
                  />
                </CSSTransition>
              )
            })
            }
          </TransitionGroup>
        </ul>
      </div>
    );
  }
}

export default TodoListUI;
