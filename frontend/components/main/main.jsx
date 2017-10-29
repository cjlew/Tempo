import React from 'react';
import HeaderContainer from '../header/header_container';
import PlaylistIndexContainer from '../playlists/playlists_index_container';
import SidebarContainer from '../sidebar/sidebar_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';

import {
  withRouter,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchPlaylists();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchPlaylists();
    }
  }

  render () {
    return(
      <div id='main-page-grid-container'>

        <div id='main-page-header-grid-container'>
          <HeaderContainer />
        </div>

        <div id='main-page-main-content-grid-container'>
            <Route path='/playlists/:playlistId' component={PlaylistShowContainer}/>
            <Route exact path='/' component={PlaylistIndexContainer} />
        </div>

        <div id='main-page-sidebar-grid-container'>
          <SidebarContainer />
        </div>

        <div id='main-page-mediaplayer-grid-container'></div>
      </div>

    );
  }


}

export default withRouter(Main);
