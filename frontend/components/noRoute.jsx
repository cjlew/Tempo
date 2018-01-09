import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const noRoute = () => (
  <div id='noRoute-container'>
    <h1>404 Error</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to='/browse/featured'>
      <p>Return to Tempo</p>
    </Link>
    <Link  to='/browse/featured'><img id='sidebar-logo' src={window.logo}/></Link>
  </div>
);

export default noRoute;
