import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container';




export default class PlaylistShow extends React.Component{
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentWillMount(){
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchSongs();
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.match.params.playlistId).then(()=> {
      this.props.history.push(`/browse/featured`);});
  }

  handleQueue(e) {
    e.preventDefault();
    this.props.queueSong(this.props.playlist.song_ids);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.props.currentUser.followed_playlists){
      if(this.props.currentUser.followed_playlists[this.props.playlist.id]) {
        this.props.unfollowPlaylist(this.props.playlist.id);
      } else {
      this.props.followPlaylist(this.props.playlist.id); }
    } else {this.props.followPlaylist(this.props.playlist.id);}
    this.props.fetchUser(this.props.currentUser.id);

  }

  render(){
    let Follow;




    const songs = this.props.songs;

    if (this.props.playlist && this.props.songs) {

      if (this.props.currentUser.followed_playlists) {
        Follow = this.props.currentUser.followed_playlists[this.props.playlist.id] ?
        <button onClick={this.handleFollow} id='playlist-show-follow'>Unfollow Playlist</button>
        : <button onClick={this.handleFollow} id='playlist-show-follow'>Follow Playlist</button>;
        } else {Follow =<button onClick={this.handleFollow} id='playlist-show-follow'>Follow Playlist</button>;}


      return (
        <div id='playlist-show-container'>
          <div id='playlist-show-background'></div>
          <div id='playlist-show-container-left'>
            <div id='playlist-show-img-cont' onClick={this.handleQueue}>

              <div id='playlist-show-music-note'>
                <img id='playlist-show-image' src={this.props.playlist.image}></img>
              </div>
            </div>

            <p id='playlist-show-title'>{this.props.playlist.title}</p>
            <Link to={`/users/${this.props.playlist.creator_id}`} id='playlist-show-creator'>By {this.props.playlist.creator_username}</Link>
            <p id='playlist-show-song-count'>{this.props.songs.length} {this.props.songs.length === 1 ? 'SONG' : 'SONGS' }</p>

          {this.props.currentUser.id === this.props.playlist.creator_id ? null : Follow}

            <Link id='playlist-show-delete-link' to='/' onClick={this.handleRemove}>
              Delete Playlist
            </Link>
          </div>

          <div id='playlist-show-container-right'>
            <SongIndexContainer songs={songs}
                       playlist={this.props.playlist}
                       />
          </div>
        </div>

      );
    } else {
      return (<p>Loading</p>);
    }
  }

}
