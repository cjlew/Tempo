import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ logout }) => {
  return(
    <div id='session-buttons'>

      <Link to="/" className="header-link">
        <h1>Tempo</h1>
      </Link>

      <Link id='login-button' to='/login'>Login</Link>

      <Link id='signup-button' to='/signup'>Sign Up</Link>

      <Link id='logout-button' to='/' onClick={logout}>Log Out</Link>

    </div>
  );
};

export default Splash;
