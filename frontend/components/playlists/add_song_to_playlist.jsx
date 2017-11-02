import React from 'react';
import Modal from 'react-modal';
import PlaylistIndexItem from './playlists_index_item';
import { withRouter, Link } from 'react-router-dom';
import NewPlaylist from './new_playlist';

const customStyles ={
  overlay : {
      backgroundColor: 'rgba(25,20,20,.7)'
  },
  content : {
    border: 'none',
    height: '100%',
    width: '100%',
      top                   : '0%',
      left                  : '0%',
      right                 : 'auto',
      bottom                : 'auto',
      backgroundColor: 'rgba(25,20,20,.7)'

  }
};

class AddSongToPlaylist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  //Modal
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  //

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

            <Modal isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  contentLabel="new-playlist-modal"
                  style={customStyles}>
              <div id='modal-content'>

                <button id='modal-close-modal' onClick={this.closeModal}>
                  <i id='modal-close-modal-icon' className='material-icons'>clear</i>
                </button>
                <NewPlaylist addSong={this.props.addSong}
                             songId={this.props.songId}
                             currentUser={this.props.currentUser}
                             createPlaylist={this.props.createPlaylist}
                             closeModal={this.closeModal}
                             fetchPlaylists={this.props.fetchPlaylists}
                             fetchUser={this.props.fetchUser}/>
              </div>
            </Modal>

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
