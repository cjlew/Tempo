import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AddSongToPlaylistContainer from '../playlists/add_song_to_playlist_container';
import ReactHowler from 'react-howler';
import Modal from 'react-modal';

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


class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  handleRemove(e) {
    e.preventDefault();
    this.props.removeSong(this.props.playlist.id, this.props.song.id);
  }
  render () {

    const Explicit = this.props.song.explicit ? 'Explicit' : '';
    return(
      <li id='song-index-item-container'>
          <div id='song-index-item-info-left'>
            <p id='song-index-item-title'>{this.props.song.title}</p>
            <p id='song-index-item-artist-album'>{this.props.song.artist_name} - {this.props.song.album_name}</p>
          </div>
          <div id='song-index-item-info-right'>
            <div id='song-index-item-button-container'>
              <button id='song-index-item-button'>
                <i className='material-icons'>expand_more</i>
              </button>
              <div id='song-index-item-button-dropdown-content'>
                <button onClick={this.handleRemove} id='song-index-item-dropdown-remove'>Remove from this Playlist</button>
                <button onClick={this.openModal} id='song-index-item-dropdown-remove'>Add to a Playlist</button>

                <Modal isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      contentLabel="add-song-modal"
                      style={customStyles}>
                  <div id='add-song-modal-content'>

                    <button id='add-song-modal-close-modal' onClick={this.closeModal}>
                      <i id='add-song-modal-close-modal-icon' className='material-icons'>clear</i>
                    </button>
                    <AddSongToPlaylistContainer
                                 songId={this.props.song.id}
                                 />
                  </div>
                </Modal>

              </div>
            </div>
            <p id='song-index-item-explicit'>{Explicit}</p>
            <p id='song-index-item-duration'>{this.props.song.url.duration()}</p>
          </div>

      </li>
    );
  }

}


export default withRouter(SongIndexItem);
