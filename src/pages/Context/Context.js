import React, { useState, createContext, useContext } from 'react';


const MyContext = createContext();

function ContextChild() {

  const count = useContext(MyContext);
  return(
    <div>
      ContextChild 的数据是 {count}
    </div>
  );
}

function ContextP() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>数字是{count}</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <MyContext.Provider value={count}>
        <ContextChild />
      </MyContext.Provider>
    </div>
  );
}

export default ContextP;
