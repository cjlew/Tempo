import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';
import SongIndex from '../songs/song_index';

export default class AlbumShow extends React.Component{
  constructor(props){
    super(props);
    this.handleQueue = this.handleQueue.bind(this);
  }

  componentWillMount(){
    this.props.fetchAlbum(this.props.match.params.albumId);
    this.props.fetchSongs();
  }


  handleQueue(e) {
    e.preventDefault();
    this.props.queueSong(this.props.album.song_ids);
  }


  render(){
    const songs = this.props.songs;
    if (this.props.album) {
      return (
        <div id='album-show-container'>
          <div id='album-show-background'></div>
          <div id='album-show-container-left'>
            <div id='album-show-img-cont' onClick={this.handleQueue}>

              <div id='album-show-music-note'>
                <img id='album-show-image' src={this.props.album.artwork}></img>
              </div>
            </div>


            <p id='album-show-title'>{this.props.album.title}</p>
            <Link to={`/users/${this.props.album.artist_id}`} id='album-show-artist'>By {this.props.album.artist}</Link>
            <p id='album-show-song-count'>{this.props.songs.length} {this.props.songs.length === 1 ? 'SONG' : 'SONGS' }</p>
          </div>

          <div id='album-show-container-right'>
            <SongIndex songs={songs}
                       pausePlayer={this.props.pausePlayer}
                       album={this.props.album}
                       fetchAlbum={this.props.fetchAlbum}
                       playSong={this.props.playSong}
                       queueSong={this.props.queueSong}/>
          </div>
        </div>

      );
    } else {
       return (<p>Loading</p>);
    }

  }
}
