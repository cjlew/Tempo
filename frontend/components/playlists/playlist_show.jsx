import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';
import SongIndexItem from '../songs/song_index_item';
import SongIndex from '../songs/song_index';
import UpdatePlaylist from './update_playlist';
import DeletePlaylist from './delete_playlist';


export default class PlaylistShow extends React.Component{
  constructor(props){
    super(props);
  }



  componentWillMount(){
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchSongs();
  }

  componentWillReceiveProps(newProps){

    }


  render(){
    const songs = this.props.songs;

    if (this.props.playlist && this.props.songs) {
      return (
        <div id='playlist-show-container'>
          <div id='playlist-show-container-left'>
            <img id='playlist-show-image'></img>

            <p id='playlist-show-title'>{this.props.playlist.title}</p>
            <p id='playlist-show-creator'>By {this.props.playlist.creator_username}</p>
            <p id='playlist-show-song-count'>{this.props.songs.length} {this.props.songs.length === 1 ? 'SONG' : 'SONGS' }</p>
          </div>

          <div id='playlist-show-container-right'>
            <SongIndex songs={songs}/>
          </div>
        </div>

      );
    } else {
      return (<p>Loading</p>);
    }
  }

}
