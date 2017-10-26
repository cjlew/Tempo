import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ logout }) => {
  return(
    <div id='background-wrap'>
      <div id='dimmer'></div>
        <div id='splash-cont'>
            <div id='splash-session-buttons'>
              <Link id='splash-header-link' to="/" className="splash-header-link">
                <h1>Tempo</h1>
              </Link>
              <Link id='login-button' to='/login'>Login</Link>
              <div id='splash-border-line-top'></div>
              <Link id='signup-button' to='/signup'>Sign Up</Link>

              <Link id='logout-button' to='/' onClick={logout}>TEMP Log Out TEMP</Link>
            </div>
            <div id='splash-blurb-cont'>
              <h1>Listen to amazing music right now</h1>
              <br/>
              <h3>All the songs you love for free</h3>
              <br/>
                <ul>
                  <li>Search and discover new songs</li>
                  <li>Create playlists of your favorite music</li>
                  <li>Share your playlists with your friends</li>
                </ul>
            </div>
          </div>

      </div>
  );
};

export default Splash;
