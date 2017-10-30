import React from 'react';
import Modal from 'react-modal';
import PlaylistIndexItem from './playlists_index_item';
import { withRouter, Link } from 'react-router-dom';

class AddSongToPlaylist extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render () {
    // const playlistsList = this.props.currentUserPlaylists.map ((playlist) => (
    //   <PlaylistIndexItem playlist={playlist}/>
    // ));
    return null;
  }

}

export default withRouter(AddSongToPlaylist);
