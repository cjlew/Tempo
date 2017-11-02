import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongIndex from '../songs/song_index';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
  }

  update(field) {
    return e => {
      this.props.search(e.currentTarget.value);
      this.setState({
      [field]: e.currentTarget.value
    });};
  }

  render() {

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
    </div>
    );
  }

}
