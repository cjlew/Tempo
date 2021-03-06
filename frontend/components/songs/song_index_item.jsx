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
    this.handleArtist = this.handleArtist.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleAlbum = this.handleAlbum.bind(this);
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

  handleQueue(e) {
    e.preventDefault();
    this.props.queueSong(this.props.song.id);
  }

  handlePlay(e) {
    e.preventDefault();
    this.props.pausePlayer();
    this.props.playSong(this.props.song.id);
  }

  handleRemove(e) {

    e.preventDefault();
    this.props.removeSong(this.props.playlist.id, this.props.song.id);
  }

  handleAlbum(e) {
    e.preventDefault();
    this.props.fetchAlbum(this.props.song.album_id);
    this.props.history.push(`/albums/${this.props.song.album_id}`);
  }

  handleArtist(e) {
    e.preventDefault();
    this.props.fetchArtist(this.props.song.artist_id);
    this.props.history.push(`/artists/${this.props.song.artist_id}`);
  }

  fixTime(length) {
    let seconds  = `${Math.floor(length % 60)}`;
    if (seconds.length < 2) {
      seconds += '0';
    }
    return Math.floor(length / 60) + ":" + seconds;
  }

  render () {
    let Remove = '';
    if (this.props.playlist &&
        this.props.playlist.creator_id === this.props.currentUser.id) {
          Remove =
              <button onClick={this.handleRemove}
                     id='song-index-item-dropdown-remove'>
                     Remove from this Playlist
              </button>;
            }
            
    return(
      <li id='song-index-item-container' onDoubleClick={this.handlePlay}>
        <div id='song-index-item-left'>
            <i id='song-index-play' onClick={this.handlePlay} className='material-icons'>play_circle_outline</i>
            <div id='song-index-item-info-left'>
              <p id='song-index-item-title'>{this.props.song.title}</p>

              <p id='song-index-item-artist-album'>
                <Link onClick={this.handleArtist} to={`/artists/${this.props.song.artist_id}`}>
                  {this.props.song.artist_name}
                </Link>
                 -
                 <Link onClick={this.handleAlbum} to={`/albums/${this.props.song.album_id}`}>
                   {this.props.song.album_name}
                </Link>

                </p>
            </div>
          </div>
          <div id='song-index-item-info-right'>
            <div id='song-index-item-button-container'>
              <button id='song-index-item-button'>
                <i className='material-icons'>expand_more</i>
              </button>
              <div id='song-index-item-button-dropdown-content'>
                {Remove}
                <button onClick={this.handleQueue} id='song-index-item-dropdown-queue'>Queue Song</button>
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
           <p id='song-index-item-duration'>{this.fixTime(this.props.song.duration)}</p>
            <p id='song-index-item-duration'></p>
          </div>
      </li>
    );
  }

}


export default withRouter(SongIndexItem);
