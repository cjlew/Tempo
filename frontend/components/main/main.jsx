import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchPlaylists();
    this.props.fetchSongs();
  }

  render () {

    return(
      <div id='main-page-grid-container'>

        <div id='main-page-header-grid-container'>
          <HeaderContainer />
        </div>

        <div id='main-page-sidebar-grid-container'></div>
        <div id='main-page-mediaplayer-grid-container'></div>
      </div>

    );
  }


}
