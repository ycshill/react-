import React, { useReducer } from 'react';

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, aciton) => {
    switch(aciton) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  },0);
  return (
    <div>
      <p>显示数字是：{count}</p>
      <button onClick={() => dispatch('add')}>点击增加</button>
      <button onClick={() => dispatch('sub')}>点击减少</button>
    </div>
  );
}

export default ReducerDemo;
