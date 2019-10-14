import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// 首页
function Index() {
  useEffect(() => {
    console.log('useEffect--Index');
    return () => {
      console.log('useEffect--Index, willUnmount');
    }
  }, [])
  return (
    <div>Index</div>
  );
}

function List() {
  useEffect(() => {
    console.log('useEffect--list');
  })
  return (
    <div>
      List
    </div>
  );
}

function Count() {
  // 这是数组解构的写法 let _useState = useState(0); const count = _useState[0]; const setCount = _useStatep[1]
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('触发了useEffect');
  });

  return (
    <div>
      <p>现在的数字是 {count}</p>
      <button onClick={()  => setCount(count + 1)}>点击增加数字</button>
      <div className="router">
        <Router>
          <div className="nav">
            <ul>
              <li>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/list">列表页</Link>
              </li>
            </ul>
          </div>
          <div className="main">
            <Route path="/" exact component={Index} />
            <Route path="/list/" exact component={List} />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Count;
