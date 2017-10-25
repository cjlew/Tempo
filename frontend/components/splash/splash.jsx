import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ logout }) => {
  return(
    <div id='splash-cont'>
      <div id='splash-session-buttons'>
        <Link to="/" className="splash-header-link">
          <h1>Tempo</h1>
        </Link>
        <Link id='login-button' to='/login'>Login</Link>
        <div id='splash-border-line'></div>
        <Link id='signup-button' to='/signup'>Sign Up</Link>

        <Link id='logout-button' to='/' onClick={logout}>Log Out</Link>
      </div>
      <div id='splash-blurb-cont'>
        <h1>hey</h1>
        <h3>check it</h3>
          <ul>
            <li>cause of this</li>
            <li>and this</li>
            <li>dont forget this</li>
          </ul>
      </div>
    </div>
  );
};

export default Splash;
