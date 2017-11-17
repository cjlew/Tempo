import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import SongIndexItem from './song_index_item';

const SongIndex = (props) => {
  const SongList = props.songs.map((song, i) =>{
    return (
      <SongIndexItem song={song} key={i}
                     playlist={props.playlist}
                     playSong={props.playSong}
                     pausePlayer={props.pausePlayer}
                     removeSong={props.removeSong}
                     queueSong={props.queueSong}
                     fetchUser={props.fetchUser}
                     fetchAlbum={props.fetchAlbum}
                     fetchArtist={props.fetchArtist}/>);
    });
  return (
    <ul id='song-index-list'>
      {SongList}
    </ul>
  );
};

export default withRouter(SongIndex);
