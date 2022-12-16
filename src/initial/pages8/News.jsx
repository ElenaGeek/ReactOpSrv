import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';

  const RELATED_ID = 1;
  
  const News = ({ title }) => {
    const { pathname } = useLocation();
    const { id } = useParams();
    return (
      <div>
        <h1>
          {title} {id}
        </h1>
        <pre>{pathname}</pre>
        {id && RELATED_ID && (
          <Link to={`${pathname}/../${RELATED_ID}`}>
            Go to Route {RELATED_ID}
          </Link>
        )}
      </div>
    );
  };

  export default News; 
  