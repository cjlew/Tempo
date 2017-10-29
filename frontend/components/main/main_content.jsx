import React from 'react';
import PlaylistIndexContainer from '../playlists/playlists_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';

import {
  withRouter,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const MainContent = (props) => {
  return(
    <div id='main-page-main-content-grid-container'>
      <Route path='/playlists/:playlistId' component={PlaylistShowContainer}/>
      <Route exact path='/' component={PlaylistIndexContainer} />
    </div>
  );
};

export default withRouter(MainContent);
