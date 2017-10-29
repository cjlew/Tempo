import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const Explicit = this.song.explicit ? 'Explicit' : '';
    return(
      <li id='song-index-item-container'>
        <Link to='/' id='song-index-item-link'>
          <div id='song-index-item-info-left'>
            <p id='song-index-item-title'>{this.props.song.title}</p>
            <p id='song-index-item-artist-album'>{this.props.song.artist} - {this.props.song.album}</p>
          </div>
          <div id='song-index-item-info-right'>
            {Explicit}
            <p id='song-index-item-duration'>duration</p>
          </div>
        </Link>
      </li>
    );
  }

}


export default withRouter(SongIndexItem);
