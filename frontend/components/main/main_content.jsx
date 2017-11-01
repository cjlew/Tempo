import React from 'react';
import PlaylistIndexContainer from '../playlists/playlists_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import ProfileContainer from '../profile/profile_container';

import {
  withRouter,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


class MainContent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return(
      <div id='main-page-main-content-container'>
        <Switch>
          <Route path='/playlists/:playlistId' component={PlaylistShowContainer}/>
          <Route path='/users/:userId' component={ProfileContainer} />
          <Route path='/' component={PlaylistIndexContainer} />
        </Switch>
      </div>
    );
  }

}

export default withRouter(MainContent);
