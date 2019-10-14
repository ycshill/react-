import React from 'react'
import ReactDOM from 'react-dom';

// import AppRouter from './AppRouter';
import Count from './pages/count/Count';
import Person from './pages/person/Person';
import ContextP from './pages/Context/Context';
import ReducerDemo from './pages/reducer/ReducerDemo'

function App() {
  return (
    <div>
      <Count />
      <Person />
      <ContextP />
      <ReducerDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
