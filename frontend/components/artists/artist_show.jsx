import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link } from 'react-router-dom';
import SongIndex from '../songs/song_index';
import AlbumShow from '../albums/album_show';

export default class ArtistShow extends React.Component{
  constructor(props){
    super(props);
    this.handleQueue = this.handleQueue.bind(this);
  }

  componentWillMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
    this.props.fetchAlbums();
    this.props.fetchSongs();
  }


  handleQueue(e) {
    e.preventDefault();
    this.props.queueSong(this.props.album.song_ids);
  }


  render(){
    if (this.props.artist && this.props.songs.length > 0) {
      const AlbumShows = this.props.albums.map((album, idx) => {
        let AlbumSongs = [];
        this.props.songs.forEach((song) => {
          if (song.album_id === album.id) {
            AlbumSongs.push(song);
          }
        });
        return(
          <AlbumShow key={idx}
            songs={AlbumSongs}
            album={album}
            currentUser={this.props.currentUser}
            pausePlayer={this.props.pausePlayer}
            playSong={this.props.playSong}
            queueSong={this.props.queueSong}
            fetchSongs={this.props.fetchSongs}
            fetchAlbum={this.props.fetchAlbum}/>
        );
      });
      return (
        <div id='artist-page-container'>
          <div id='artist-page-background'></div>
          <div id='artist-page-header-background'
              style={{backgroundImage: `url(${this.props.artist.image})`}}>
            <div id='artist-page-dim'>

            </div>
          </div>
         <div id='artist-page-header'>
          <h1 id='artist-page-name'>{this.props.artist.name}</h1>
         </div>
         <div id='artist-page-popular'>

         </div>
         <div id='artist-album-index'>

         </div>

         <div id='artist-album-show'>
           {AlbumShows}
         </div>
        </div>
      );
    } else {
       return (<p>Loading</p>);
    }

  }
}
