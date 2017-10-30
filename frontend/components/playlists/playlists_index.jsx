import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import  PlaylistIndexItem  from './playlists_index_item';
import NewPlaylist from './new_playlist';
import Modal from 'react-modal';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  // Modal
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal() {

  }

  //

  render () {
    let PlaylistItems = this.props.playlists.map(playlist =>
                  (<PlaylistIndexItem playlist={playlist}
                                      key={playlist.id}
                                      fetchSongs={this.props.fetchSongs}/>));

    return (
      <div id='playlist-index-container'>
        <div id='playlist-index-header-button'>
          <h1 id='playlists-index-header'>Playlists</h1>
          <button id='playlists-index-new-playlist-button'
                  onClick={this.openModal}>New Playlist</button>
          <Modal isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="new-playlist-modal">
            <button onClick={this.closeModal}>Close</button>
            <NewPlaylist currentUser={this.props.currentUser}
                         createPlaylist={this.props.createPlaylist} />
          </Modal>

        </div>
        <div id='playlist-index-items'>
          <ul id='playlists-index-list'>
            {PlaylistItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
