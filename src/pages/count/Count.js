import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>现在的数字是 {count}</p>
      <button onClick={()  => setCount(count + 1)}>点击增加数字</button>
    </div>
  );
}

export default Count;
