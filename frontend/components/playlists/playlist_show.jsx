import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';
import SongIndexItem from '../songs/song_index_item';
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
    debugger

    const SongList = this.props.songs.map(song =>{
      return (
        <SongIndexItem song={song} key={song.id}/>);
      });
    if (this.props.playlist && this.props.songs) {
      return (
        <div id='playlist-show-container'>
          <div id='playlist-show-container-left'>
            <img id='playlist-show-image'></img>

            <p id='playlist-show-title'>{this.props.playlist.title}</p>
            <p id='playlist-show-song-count'>{this.props.songs.length} songs</p>
          </div>

          <div id='playlist-show-container-right'>
            <ul id='playlist-show-container-songs'>
              {SongList}
            </ul>
          </div>
        </div>

      );
    } else {
      return (<p>Loading</p>);
    }
  }

}
