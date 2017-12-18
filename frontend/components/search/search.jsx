import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container';

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
    const SearchSongIndex = this.props.songs.length ?
          <SongIndexContainer songs={this.props.songs}/>: '';

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
          <ul>
            <li>
              <label>Songs
                <input className='type-radio'type='radio'
                        value='Songs' name='search-radio'
                        id='songs-radio' checked={this.state.type === 'Songs'}
                        onChange={this.handleTypeChange}/>
              </label>
            </li>
            <li>
              <label>Artists
                <input className='type-radio' type='radio'
                        value='Artists' name='search-radio'
                        id='artists-radio' checked={this.state.type === 'Artists'}
                        onChange={this.handleTypeChange}/>
              </label>
            </li>
            <li>
              <label>Albums
                <input className='type-radio' type='radio'
                        value='Albums' name='search-radio'
                        id='albums-radio' checked={this.state.type === 'Albums'}
                        onChange={this.handleTypeChange}/>
              </label>
            </li>
          </ul>
        </div>
        <div id='search-results-container'>
          {SearchSongIndex}
        </div>
    </div>
    );
  }

}
