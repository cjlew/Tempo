import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';
import SongIndex from '../songs/song_index';




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
    this.props.deletePlaylist(this.props.match.params.playlistId).then(()=> this.props.history.push(`/`));
  }

  handleQueue(e) {
    e.preventDefault();
    this.props.queueSong(this.props.playlist.song_ids);
  }

  handleFollow(e) {
    e.preventDefault();
    
  }

  render(){
    const songs = this.props.songs;

    if (this.props.playlist && this.props.songs) {
      return (
        <div id='playlist-show-container'>
          <div id='playlist-show-background'></div>
          <div id='playlist-show-container-left'>
            <img id='playlist-show-image' onClick={this.handleQueue}/>
            <p id='playlist-show-title'>{this.props.playlist.title}</p>
            <Link to={`/users/${this.props.playlist.creator_id}`} id='playlist-show-creator'>By {this.props.playlist.creator_username}</Link>
            <p id='playlist-show-song-count'>{this.props.songs.length} {this.props.songs.length === 1 ? 'SONG' : 'SONGS' }</p>
            <Link id='playlist-show-delete-link' to='/' onClick={this.handleRemove}>
              Delete Playlist
            </Link>
          </div>

          <div id='playlist-show-container-right'>
            <SongIndex songs={songs}
                       pausePlayer={this.props.pausePlayer}
                       playlist={this.props.playlist}
                       playSong={this.props.playSong}
                       removeSong={this.props.removeSong}
                       queueSong={this.props.queueSong}/>
          </div>
        </div>

      );
    } else {
      return (<p>Loading</p>);
    }
  }

}
