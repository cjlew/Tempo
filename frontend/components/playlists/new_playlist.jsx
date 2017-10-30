import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewPlaylist extends React.Component {
  constructor({ currentUser, createPlaylist, closeModal, fetchPlaylists }) {
    super({ currentUser, createPlaylist, closeModal, fetchPlaylists });
    this.state = {
      title: '',
      creator_id: currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let playlist = this.state;

    this.props.createPlaylist(playlist).then((newPlaylist) => {
      this.props.fetchPlaylists();
      // why is the promise returning the value like this
      this.props.history.push(`/playlists/${Object.values(newPlaylist.playlist)[0].id}`);
    }, () => console.log('broke'));

  }


  render () {

    return (
      <div id='new-playlist-container'>
        <h1 id='new-playlist-header'>Create New Playlist</h1>
        <form id='new-playlist-submit-form' onSubmit={this.handleSubmit}>
          <p id='new-playlist-label'>Playlist Name</p>
            <input type="text"
              placeholder='Start typing...'
              value={this.state.title}
              onChange={this.update('title')}
              id='new-playlist-title-input'
            />
          <br/>
          <input id='new-playlist-submit' type='submit' onClick={this.handleSubmit} value="Create"/>
        </form>

      </div>
  );
}
}

export default withRouter(NewPlaylist);
