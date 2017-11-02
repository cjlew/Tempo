import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import SongIndexItem from './song_index_item';

const SongIndex = ({songs, playlist, removeSong, queueSong, playSong, pausePlayer, fetchUser}) => {
  const SongList = songs.map((song, i) =>{
    return (
      <SongIndexItem song={song} key={i}
                     playlist={playlist}
                     playSong={playSong}
                     pausePlayer={pausePlayer}
                     removeSong={removeSong}
                     queueSong={queueSong}
                     fetchUser={fetchUser}/>);
    });
  return (
    <ul id='song-index-list'>
      {SongList}
    </ul>
  );
};

export default withRouter(SongIndex);
