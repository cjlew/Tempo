import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists_index_container';
import Modal from 'react-modal';
import NewPlaylist from '../new_playlist';
import FeaturedContainer from './featured_container.js'


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


class browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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


  render() {

    return(
      <div className='browse-container'>
        <div className='browse-top-bar'>
          <div className='browse-empty'></div>
          <nav className='browse-options'>
            <ul className='browse-options-ul'>
              <Link to='/browse/featured'><li>Featured</li></Link>
              <Link to='/browse/genres'><li>Genres and Moods</li></Link>
              <Link to='/browse/discover'><li>Discover</li></Link>
            </ul>
          </nav>

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
              <NewPlaylist currentUser={this.props.currentUser}
                           createPlaylist={this.props.createPlaylist}
                           closeModal={this.closeModal}
                           fetchPlaylists={this.props.fetchPlaylists}
                           fetchUser={this.props.fetchUser}/>
            </div>
          </Modal>
        </div>

        <div className='browse-playlist-index'>

          <Route path='/browse/featured' component={FeaturedContainer}/>
        </div>
      </div>
    );
  }

}

export default withRouter(browse);
