import React from 'react'
import ReactDOM from 'react-dom';

// import AppRouter from './AppRouter';
import Count from './pages/count/Count';
import Person from './pages/person/Person';
import ContextP from './pages/Context/Context';

function App() {
  return (
    <div>
      <Count />
      <Person />
      <ContextP />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
