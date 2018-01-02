import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container';
import ArtistsSearchIndex from './search_artists';
import AlbumsSearchIndex from './search_albums';
import NoResults from './no_results';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'Songs'
    };
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleTypeChange(e) {
    e.preventDefault();
    this.setState({type: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchSongs();
  }

  update(field) {
    return e => {
      this.props.search(e.currentTarget.value);
      this.setState({
      [field]: e.currentTarget.value
    });};
  }


  render() {

    const SearchSongIndex = this.props.songs.length  ?
          <SongIndexContainer songs={this.props.songs}/>: '';

    const SearchArtistsIndex = this.props.artists.length  ?
          <ArtistsSearchIndex artists={this.props.artists}/> : '';

    const SearchAlbumsIndex = this.props.albums.length  ?
          <AlbumsSearchIndex albums={this.props.albums}/> : '';


    let CurrentResults;

    if (this.state.type === 'Songs') {
      CurrentResults = SearchSongIndex;
    } else if (this.state.type === 'Artists') {
      CurrentResults = SearchArtistsIndex;
    } else {
      CurrentResults = SearchAlbumsIndex;
    }

    return(
      <div id='search-container'>
        <div id='search-background'></div>

        <div id='search-searchbar-container'>
          <input type='text'
            id='search-search-bar'
            placeholder={'Search'}
            value={this.state.search}
            onChange={this.update('search')}
            className='header-search-bar'/>
        </div>

        <div id='search-type-bar'>
          <ul id='search-type-list'>
            <li>

                <input className='type-radio'type='radio'
                        value='Songs' name='search-radio'
                        id='songs-radio' checked={this.state.type === 'Songs'}
                        onChange={this.handleTypeChange}/>
                      <label htmlFor='songs-radio' className='type-radio-label'>Songs</label>
            </li>
            <li>

                <input className='type-radio' type='radio'
                        value='Artists' name='search-radio'
                        id='artists-radio' checked={this.state.type === 'Artists'}
                        onChange={this.handleTypeChange}/>
                      <label htmlFor='artists-radio' className='type-radio-label'>Artists</label>
            </li>
            <li>
                <input className='type-radio' type='radio'
                        value='Albums' name='search-radio'
                        id='albums-radio' checked={this.state.type === 'Albums'}
                        onChange={this.handleTypeChange}/>
                      <label htmlFor='albums-radio' className='type-radio-label'>Albums</label>
            </li>
          </ul>
        </div>

        <div id='search-results-container'>
          {CurrentResults}
        </div>
    </div>
    );
  }

}
