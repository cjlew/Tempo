import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const AlbumsSearchIndexItem = ({album}) => {

  return(
    <li className='album-search-index-item'>
      <div id='album-search-img-cont'>
        <Link to={`/albums/${album.id}`}>
          <img className='album-search-index-img' src={`${album.artwork}`}></img>
        </Link>
      </div>

      <Link id='album-search-index-name'
            to={`/albums/${album.id}`}>{album.title}</Link>

    </li>

  );
};

export default AlbumsSearchIndexItem;
