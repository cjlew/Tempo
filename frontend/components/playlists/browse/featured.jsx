import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import  PlaylistIndexItem  from '../playlists_index_item';



class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.clearPlaylists();
  }

  componentDidMount(){
    this.props.fetchFeaturedPlaylists();
  }

  render () {
    let PlaylistItems = this.props.playlists.map(playlist =>
                  (<PlaylistIndexItem playlist={playlist}
                                      key={playlist.id}
                                      fetchSongs={this.props.fetchSongs}/>));

    return (

      <div id='playlist-index-container'>
        <div id='featured-index-background'></div>
        <ul className='browse-options-ul'>
          <Link className='browse-selected' to='/browse/featured'><li>FEATURED</li></Link>
          <Link className='browse-unselected'to='/browse/genres'><li>GENRES AND MOODS</li></Link>
          <Link className='browse-unselected'to='/browse/discover'><li>DISCOVER</li></Link>
        </ul>

        <div id='playlist-index-items'>
          <ul id='playlists-index-list'>
            {PlaylistItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Featured;
