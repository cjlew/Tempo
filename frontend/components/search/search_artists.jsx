import React from 'react';
import ArtistsSearchIndexItem from './search_artist_index_item';

const ArtistsSearchIndex = ({artists}) => {

  const ArtistsIndexItems = Object.values(artists).map(artist =>
                            <ArtistsSearchIndexItem artist={artist}
                                                    key={artist.id}/>);

  return(
    <div id='artists-search-index'>
      <ul>
        {ArtistsIndexItems}
      </ul>
    </div>
  );
};

export default ArtistsSearchIndex;
