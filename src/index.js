import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/index';
import TodoList from './TodoList';
import { Provider } from 'react-redux';

const App = (
  <Provider store={store}>
    <TodoList store={store}/>
  </Provider>
);

ReactDOM.render(App, document.querySelector('#root'));
