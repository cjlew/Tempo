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
    
  }

}
