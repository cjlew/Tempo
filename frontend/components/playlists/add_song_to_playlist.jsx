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

    const PlaylistItems = this.props.currentUserPlaylists.map ((playlist) => {
      return(
      <PlaylistIndexItem playlist={playlist}
                        key={playlist.id}
                        songId={this.props.songId}
                        addSong={this.props.addSong}/>);
                    });
    return(
      <div id='add-song-container'>
        <div id='add-song-top'>
          <div id='add-song-empty-div'></div>
          <h1 id='add-song-header'>Add to Playlist</h1>
          <button id='playlists-index-new-playlist-button'
                  onClick={this.openModal}>New Playlist</button>
        </div>
        <div id='add-song-index-items'>
          <ul id='add-song-index-list'>
            {PlaylistItems}
          </ul>
        </div>
      </div>
    )

  }

}

export default withRouter(AddSongToPlaylist);
