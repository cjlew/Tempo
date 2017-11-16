import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.props.clearSearch();
  }

  render() {
    return(
      <div id='sidebar-container'>
        <div id='sidebar-top'>
          <Link to='/'><img id='sidebar-logo' src={window.logo}/></Link>
          <div className='sidebar-divider'></div>

          <nav id='sidebar-nav'>
            <ul>
              <li><Link className='sidebar-nav-links' to='/'>Home</Link></li>
              <li><Link className='sidebar-nav-links' to='/myplaylists'>Your Music</Link></li>
            </ul>
          </nav>

          <div className='sidebar-divider'></div>
            <Link onClick={this.handleSearch} to='/search' id='sidebar-search-link'>
              <p className='sidebar-nav-links'>Search</p>
              <FontAwesome className='sidebar-nav-links' name='search'></FontAwesome>
            </Link>
          <div className='sidebar-divider'></div>

        </div>

        <div id='sort-by-button-container'></div>
        <div id='sidebar-bottom'>
          <div className='sidebar-divider'></div>

          <div id='sidebar-pic-username'>
            <Link to={`/users/${this.props.currentUser.id}`}>
              <img id='sidebar-profile-picture'
               src={this.props.currentUser.profile_picture}/>
             </Link>
             <Link to={`/users/${this.props.currentUser.id}`} id='sidebar-username'>{this.props.currentUser.username}</Link>
          </div>
        </div>
      </div>
    );
  }

}
