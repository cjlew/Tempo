import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
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

        <div id='search-results-container'>
          {SearchSongIndex}
        </div>
    </div>
    );
  }

}
