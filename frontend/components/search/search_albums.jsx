import React from 'react';
import AlbumsSearchIndexItem from './search_album_index_item';

const AlbumsSearchIndex = ({albums}) => {

  const AlbumsIndexItems = Object.values(albums).map(album =>
                            <AlbumsSearchIndexItem album={album}
                                                    key={album.id}/>);

  return(
      <ul id='albums-search-index'>
        {AlbumsIndexItems}
      </ul>
  );
};

export default AlbumsSearchIndex;
