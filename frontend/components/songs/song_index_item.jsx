import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
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
                <i className='material-icons'>expand more</i>
              </button>
              <div id='song-index-item-button-dropdown-content'>
                <button id='song-index-item-dropdown-remove'>Remove from this Playlist</button>
                <button id='song-index-item-dropdown-remove'>Add to a Playlist</button>

              </div>
            </div>
            <p id='song-index-item-explicit'>{Explicit}</p>
            <p id='song-index-item-duration'>duration</p>
          </div>

      </li>
    );
  }

}


export default withRouter(SongIndexItem);
