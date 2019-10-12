import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// 首页
function Index() {
  return(<div>首页</div>)
}

// 列表
function List() {
  return(<div>列表</div>)
}

function AppRouter()  {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list/">列表页</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/" component={List} />
    </Router>
  );
}

export default AppRouter;
