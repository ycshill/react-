import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


function Index() {
  return <div>首页</div>;
}

function List() {
  return <div>列表页面</div>;
}

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表页</Link></li>
      </ul>
      <Route path="/" exact={1} component={Index} />
      <Route path="/list/" component={List} />
    </Router>
  );
}

export default AppRouter;
