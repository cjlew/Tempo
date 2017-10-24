import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ logout }) => {
  return(
    <div id='session-buttons'>

      <Link id='login-button' to='/login'>Login</Link>

      <Link id='signup-button' to='/signup'>Sign Up</Link>

      <button onClick={logout}>Log Out</button>

    </div>
  );
};

export default Splash;
