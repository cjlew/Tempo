import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import SongIndexItem from './song_index_item';

const SongIndex = ({songs}) => {
  const SongList = songs.map(song =>{
    return (
      <SongIndexItem song={song} key={song.id}/>);
    });
  return (
    <ul id='song-index-list'>
      {SongList}
    </ul>
  );
};

export default withRouter(SongIndex);
