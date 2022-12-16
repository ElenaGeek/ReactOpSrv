import React from 'react';
import {Routes, Route, Link, useLocation, useParams} from 'react-router-dom';

const Topics = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    console.log ('Hi'+ id);
  return (
    <>
    
     <h1>My Chats</h1>
      <h2>Темы {id}</h2>
{/*
      <nav>
        <ul>
          <li>
            <Link to={`${pathname}/components`}>
              Компоненты
            </Link>
          </li>
          <li>
            <Link to={`${pathname}/props-vs-state`}>
              Пропы против состояния
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path={`${pathname}/:id`}>
          </Route>
          <Route path={pathname}>
            <h3>Пожалуйста, выберите тему.</h3>
          </Route>
        </Routes>
      </div>
  */}
    </>
  );
}

/*
function Topic() {
const { topicId } = useParams();
  return <h3>Идентификатор выбранной темы: {topicId}</h3>;
}
*/
export default Topics;