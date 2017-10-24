import React from 'react';
import { Link } from 'react-router-dom';

const splash = () => {
  return(
    <div id='session-buttons'>

      <Link id='login-button' to='/login'>Login</Link>

      <Link id='signup-button' to='/signup'>Sign Up</Link>

    </div>
  );
};

export default splash;
