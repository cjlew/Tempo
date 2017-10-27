import React from 'react';
import Modal from 'react-modal';
import SongIndexContainer from '../songs/song_index_container';
import UpdatePlaylist from './update_playlist';
import DeletePlaylist from './delete_playlist';


export default class PlaylistIndex extends React.Component{
  constructor(props){
    super(props);
  }



  componentWillMount(){
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  componentWillReceiveProps(newProps){

    }


  render(){
    const {playlist, songs} = this.props;
    let buttonsToDisplay;
    if(playlist.user_owns){
      buttonsToDisplay = (
        <div id="">
          <button id=""
          onClick={this.props.editPlaylist}>Rename</button>
        <button id=''
          onClick={this.props.deletePlaylist}>Delete</button>
        </div>
      );
    }

    return(
      <div className="hbox playlist-detail-flex-container">
        <div className="vbox playlist-media-info-container">
            {buttonsToDisplay}
        </div>

        <div className="playlist-song-index-container vieport">
          <SongIndexContainer
            songs={Object.values(songs)}
            />
        </div>
      </div>

    );
  }

}
