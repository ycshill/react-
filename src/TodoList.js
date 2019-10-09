import React from 'react';
// import store from './store/index';
import { connect } from 'react-redux';


// 用一个无状态的组件，这样的话可以达到UI和逻辑的分离
const TodoList = (props) => {
  const { inputValue, list, inputChange, addItem, deleteItem} = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange}></input>
        <button onClick={addItem}>增加</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => deleteItem(index)}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
}


// 这里是逻辑
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(e){
      const action = {
        type: 'inputChange',
        value: e.target.value,
      }

      dispatch(action);
    },
    addItem() {
      const action = {
        type: 'addItem',
      };

      dispatch(action);
    },
    deleteItem(index) {
      const action = {
        type: 'deleteItem',
        index,
      };

      dispatch(action);
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
