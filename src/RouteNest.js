import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Index from './pages/home/Index';
import List from './pages/list/List';

function RouteNest() {
  return (
    <div>
      <h3>我是一级的</h3>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表页面</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list"  component={List} />
      </Router>
    </div>
  );
}

export default RouteNest;
