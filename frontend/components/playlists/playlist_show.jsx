import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';
import SongIndexItem from '../songs/song_index_item';
import UpdatePlaylist from './update_playlist';
import DeletePlaylist from './delete_playlist';


export default class PlaylistIndex extends React.Component{
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
    const SongList = this.props.songs.map(song =>
      <SongIndexItem song={song} key={song.id}/>);

    return (
      <div id='playlist-show-container'>
        <div id='playlist-show-container-left'>
          <img id='playlist-show-image'></img>

          <p id='playlist-show-title'>{this.props.playlist.title}</p>
          <p id='playlist-show-song-count'>{this.props.songs.length} songs</p>
          <Link id='playlist-show-play-all'></Link>
          <Link id='playlist-show-follow'></Link>
        </div>

        <div id='playlist-show-container-right'>
          <ul id='playlist-show-container-songs'>
            {SongList}
          </ul>
        </div>
      </div>

    );
  }

}
