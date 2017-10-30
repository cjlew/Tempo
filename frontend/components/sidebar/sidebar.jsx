import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return(
      <div id='sidebar-container'>
        <Link to='/'><img id='sidebar-logo' src={window.logo}/></Link>
        <div id='sidebar-toggle-container'></div>
        <div id='sort-by-button-container'></div>
        <div id='friend-playlist-container'></div>
        <img id='sidebar-profile-picture'
             src={this.props.currentUser.profile_picture}/>
      </div>
    );
  }

}
