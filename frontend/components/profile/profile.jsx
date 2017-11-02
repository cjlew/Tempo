import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlaylistIndexItem from '../playlists/playlists_index_item';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriend = this.handleFriend.bind(this);
  }
  componentDidMount () {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  handleFriend(e) {
    e.preventDefault();
    if (this.props.currentUser.friends) {
    if (this.props.currentUser.friends[this.props.user.id]) {
      this.props.removeFriend(this.props.user.id);
    } else {
      this.props.addFriend(this.props.user.id);
    } } else {this.props.addFriend(this.props.user.id);}
    this.props.fetchUser(this.props.user.id);
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    let Friend;

    if (!this.props.user) {

      return (
        <div id='profile-background'>
          <p>loading...</p>
        </div>
      );
    } else {
      if (this.props.currentUser.friends){
      Friend = this.props.currentUser.friends[this.props.user.id] ?
      <button onClick={this.handleFriend} id='profile-follow-unfollow'>Remove Friend</button>
       : <button onClick={this.handleFriend} id='profile-follow-unfollow'>Add Friend</button>;
     } else { Friend = <button onClick={this.handleFriend} id='profile-follow-unfollow'>Add Friend</button>;}
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

            {this.props.currentUser.id === this.props.user.id ? null : Friend}

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
