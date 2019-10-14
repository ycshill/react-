import React from 'react';
import { Link, Route } from 'react-router-dom';
import Person from './Person';
import History from './History';

function List() {
  return(
    <div>
      <h3>我是列表页面</h3>
      <div className="main">
        <div>
          <ul>
            <li>
              <Link to="/list/person">人物简介</Link>
            </li>
            <li>
              <Link to="/list/history">历史介绍</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route path="/list/person" component={Person} />
          <Route path="/list/history" component={History} />
        </div>
      </div>
    </div>
  );
}

export default List;
