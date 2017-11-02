import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlaylistIndexItem from '../playlists/playlists_index_item';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    if (!this.props.user) {
      return (<p>loading...</p>);
    } else {
      const PlaylistIndexItems = this.props.userPlaylists.map((playlist) => {
        return(
        <PlaylistIndexItem playlist={playlist}
                          key={playlist.id}/>);
                        });
      return (
        <div id='profile-page-container'>
          <div id='profile-background'></div>
          <img id='profile-page-picture' src={this.props.user.profile_picture}/>
          <h2 id='profile-name'>{this.props.user.username}</h2>
          <h3 id='profile-playlists-label'>Public Playlists</h3>

          <div id='profile-index-items'>
            <ul id='profile-index-list'>
              {PlaylistIndexItems}
            </ul>
          </div>

        </div>
      );
    }
  }
}
