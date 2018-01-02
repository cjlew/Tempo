import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const ArtistsSearchIndexItem = ({artist}) => {

  return(
    <li className='artist-search-index-item'>
      <div id='artist-search-img-cont'>
        <Link to={`/artists/${artist.id}`}>
          <img className='artist-search-index-img' src={`${artist.image}`}></img>
        </Link>
      </div>

      <Link id='artist-search-index-name'
            to={`/artists/${artist.id}`}>{artist.name}</Link>

    </li>

  );
};

export default ArtistsSearchIndexItem;
