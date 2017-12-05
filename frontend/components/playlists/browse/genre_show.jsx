import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import  PlaylistIndexItem  from '../playlists_index_item';


export default class GenreShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    this.props.fetchPlaylists();
  }



  render() {
    let PlaylistItems = this.props.playlists.map(playlist =>
                  (<PlaylistIndexItem playlist={playlist}
                                      key={playlist.id}
                                      fetchSongs={this.props.fetchSongs}/>));

    return (

      <div id='playlist-index-container'>
        <div id='genre-show-index-background'></div>

        <div id='playlist-index-items'>
          <ul id='playlists-index-list'>
            {PlaylistItems}
          </ul>
        </div>
      </div>
    );
  }


}
