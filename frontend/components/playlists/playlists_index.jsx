import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import  PlaylistIndexItem  from './playlists_index_item';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render () {
    let PlaylistItems = this.props.playlists.map(playlist =>
                  (<PlaylistIndexItem playlist={playlist}
                                      key={playlist.id}
                                      fetchSongs={this.props.fetchSongs}/>));

    return (
      <div id='playlist-index-container'>
        <h1 id='playlists-index-header'>Playlists</h1>
        <div id='playlist-index-items'>
          <ul id='playlists-index-list'>
            {PlaylistItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
