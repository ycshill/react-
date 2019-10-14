import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Index from './pages/home/Index';
import List from './pages/list/List';

function RouteNest() {
  // 动态路由配置
  const routeConfig = [
    {
      path: '/', title: '首页', exact:true, component:Index
    },
    {
      path: '/list', title: '列表页面', exact:false, component:List
    }
  ];

  return (
    <div>
      <h3>我是一级的</h3>
      <Router>
        <ul>
          {routeConfig.map(item => {
            return (
              <li>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          {routeConfig.map(item => {
            return (
              <Route path={item.path} exact={item.exact} component={item.component} />
            );
          })}
        </div>
      </Router>
    </div>
  );
}

export default RouteNest;
