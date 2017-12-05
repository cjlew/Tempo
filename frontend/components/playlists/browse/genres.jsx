import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GenreIndexItem from './genre_index_item';



class Genres extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  render () {
    let GenreItems = this.props.genres.map(genre =>
                  (<GenreIndexItem genre={genre}
                                      key={genre.id}/>));

    return (

      <div id='playlist-index-container'>
        <div id='playlist-index-background'></div>
        <ul className='browse-options-ul'>
          <Link className='browse-unselected' to='/browse/featured'><li>FEATURED</li></Link>
          <Link className='browse-selected'to='/browse/genres'><li>GENRES AND MOODS</li></Link>
          <Link className='browse-unselected'to='/browse/discover'><li>DISCOVER</li></Link>
        </ul>

        <div id='genre-index-items'>
          <ul id='genres-index-list'>
            {GenreItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Genres;
