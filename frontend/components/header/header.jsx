import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return(
      <div id='header-container'>
        <div id='header-invis'></div>
        <div id='playlist-index-options'>

        </div>

        <div id='header-currentUser-info'>

          <Link id='header-currentUser-link'
            to={`/users/${this.props.currentUser.id}`}>
            {this.props.currentUser.username}
          </Link>
          <div className="header-dropdown">
            <button className="header-dropbtn">
              <i className='material-icons'>menu</i>
            </button>

            <div className="header-dropdown-content">
              <Link id='logout-button' to='/'
                onClick={this.props.logout}>Log Out</Link>
            </div>

          </div>
        </div>

      </div>
    );
  }


}
