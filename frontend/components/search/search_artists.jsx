import React from 'react';
import ArtistsSearchIndexItem from './search_artist_index_item';

const ArtistsSearchIndex = ({artists}) => {

  const ArtistsIndexItems = Object.values(artists).map(artist =>
                            <ArtistsSearchIndexItem artist={artist}
                                                    key={artist.id}/>);

  return(
      <ul id='artists-search-index'>
        {ArtistsIndexItems}
      </ul>
  );
};

export default ArtistsSearchIndex;
