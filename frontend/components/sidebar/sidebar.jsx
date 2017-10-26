import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  render() {

    return(
      <div id='sidebar-container'>
        <div id='sidebar-toggle-container'></div>
        <div id='sort-by-button-container'></div>
        <div id='friend-playlist-container'></div>
      </div>
    );
  }

}
