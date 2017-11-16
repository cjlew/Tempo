import React from 'react';
import { withRouter, Link }from 'react-router-dom';
import ReactDOM from 'react-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.addSong) {
      this.props.addSong(this.props.playlist.id, this.props.songId);
    }

  }

  // <i id='playlist-index-item-play' className='material-icons'>play_circle_outline</i>
  render() {
    return(

    <li id='playlist-index-list-item'>
      <Link onClick={this.handleClick} to={`/playlists/${this.props.playlist.id}`}>

        <div id='playlist-index-item-img-cont'>
          <div id='playlist-index-item-music-note'>
            <img className='playlist-index-img' src={`${this.props.playlist.image}`}></img>
          </div>
        </div>
      </Link>

      <br/>

      <Link to={`/playlists/${this.props.playlist.id}`}>
        <h3 id='playlist-index-item-title'>{this.props.playlist.title}</h3>
      </Link>

      <Link to={`/users/${this.props.playlist.creator_id}`}>
        <h3 id='playlist-index-item-creator'>By {this.props.playlist.creator_username}</h3>
      </Link>
    </li>
  );
  }
}

export default withRouter(PlaylistIndexItem);
