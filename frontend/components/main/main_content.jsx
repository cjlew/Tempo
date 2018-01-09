import React from 'react';
import PlaylistIndexContainer from '../playlists/playlists_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import ProfileContainer from '../profile/profile_container';
import SearchContainer from '../search/search_container';
import MyPlaylistsIndexContainer from '../playlists/my_playlist_index_container';
import AlbumShowContainer from '../albums/album_show_container';
import ArtistShowContainer from '../artists/artist_show_container';
import BrowseContainer from '../playlists/browse/browse_container';
import GenreShowContainer from '../playlists/browse/genre_show_container';
import NoRoute from '../noRoute';

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

          <Route path='/genres/:genreId' component={GenreShowContainer}/>
          <Route path='/artists/:artistId' component={ArtistShowContainer}/>
          <Route path='/albums/:albumId' component={AlbumShowContainer}/>
          <Route path='/playlists/:playlistId' component={PlaylistShowContainer}/>
          <Route path='/users/:userId' component={ProfileContainer} />
          <Route path='/search' component={SearchContainer} />
          <Route path='/myplaylists' component={MyPlaylistsIndexContainer} />
          <Route path='/browse' component={BrowseContainer} />
          <Route component={NoRoute} />
        </Switch>
      </div>
    );
  }

}

export default withRouter(MainContent);
