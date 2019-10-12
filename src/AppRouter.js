import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// 首页
function Index() {

  const [list] = useState([
    {id: 1, title: '文章1'},
    {id: 2, title: '文章2'},
    {id: 3, title: '文章3'}
  ]);

  return(
    <ul>
      {list.map(item => {
        return(<li key={item.id}><Link to={`/list/${item.id}`}>item.title</Link></li>)
      })}
    </ul>
  )
}

// 列表
function List(props) {

  const [id, setId] = useState('');
  useEffect(() => {
    setId(props.match.params.id);
    props.history.push('/redirect/');
    console.log(id, '我是id');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(<div>列表{id}</div>)
}

// 重定向页面
function RedirectPage() {
  return(<div>重定向页面</div>)
}

function AppRouter()  {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list/123">列表页</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/redirect/" component={RedirectPage} />
    </Router>
  );
}

export default AppRouter;
