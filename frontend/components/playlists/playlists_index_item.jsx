import React from 'react';
import { withRouter, Link }from 'react-router-dom';



class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

    this.props.history.push(`/playlists/${this.props.playlist.id}`);
  }

  render() {

    return(

    <li id='playlist-index-list-item'>
      <Link to={`/playlists/${this.props.playlist.id}`} onClick={this.handleClick}>
        <div id='playlist-index-item-img-cont'>
        </div>
      </Link>

      <br/>

      <Link to={`/playlists/${this.props.playlist.id}`} onClick={this.handleClick}>
        <h3 id='playlist-index-item-title'>{this.props.playlist.title}</h3>
      </Link>

      <Link to={`/users/${this.props.playlist.creator_id}`} onClick={this.handleClick}>
        <h3 id='playlist-index-item-creator'>By {this.props.playlist.creator_username}</h3>
      </Link>
    </li>
  );
  }
}

export default withRouter(PlaylistIndexItem);
