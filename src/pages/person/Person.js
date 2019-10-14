import React, { useState } from 'react';

function Person() {
  const [name] = useState('lily');
  const [age] = useState(18);
  const [sex] = useState('女');

  return(
    <div>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>性别：{sex}</p>
    </div>
  )
}

export default Person;
