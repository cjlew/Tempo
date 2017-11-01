import React from 'react';
import ReactHowler from 'react-howler';
import raf from 'raf';
import { Link, withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import secToMin from 'sec-to-min';

class MediaPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      playing: this.props.playing,
      loop: false,
      mute: false,
      volume: .5,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    }


  componentWillUnmount () {
    this.clearRAF();
  }

  handlePrev () {
    this.props.pausePlayer();
    this.props.prevSong();
  }

  handleNext () {
    this.props.pausePlayer();
    this.props.nextSong();
  }

  handleToggle() {
    this.setState({
      playing: !this.state.playing
    });
    this.props.togglePlayer();
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration(),
      playing: true
    });
    this.props.playPlayer();
  }

  handleOnPlay() {
    this.setState({
      playing: true
    });
    this.renderSeekPos();
  }

  handleOnEnd () {
    this.setState({
      playing: false
    });
    this.clearRAF();
    this.props.nextSong();
  }



  handleStop () {
    this.player.stop();
    this.setState({
      playing: false
    });
    this.renderSeekPos();
  }

  handleLoopToggle() {
    this.setState({
      loop: !this.state.loop
    });
  }

  handleMuteToggle() {
    this.setState({
      mute: !this.state.mute
    });
  }

  renderSeekPos() {
    this.setState({
      seek: this.player.seek()
    });
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  }


  clearRAF () {
    raf.cancel(this._raf);
  }


  render() {
    const SongInfo = this.props.currentSong ?

      <div id='mp-song-info'>
        <img id='mp-album-art'></img>
        <div id='mp-words'>
          <p id='mp-song-title'>{this.props.currentSong.title}</p>
          <p id='mp-artist-name'>{this.props.currentSong.artist_name}</p>
        </div>
      </div>
      : <p></p>;


    const Howl = this.props.currentSong ?
        <ReactHowler
        src={`${this.props.currentSong.song_url}`}
        playing={this.state.playing}
        onLoad={this.handleOnLoad}
        onPlay={this.handleOnPlay}
        onEnd={this.handleOnEnd}
        loop={this.state.loop}
        mute={this.state.mute}
        volume={this.state.volume}
        currentSong={this.state.currentSong}
        ref={(ref) => (this.player = ref)}
      /> : '';

    return (
      <div id='media-player'>
        {Howl}
        <div id='media-player-song-info'>
          {SongInfo}
        </div>

        <div id='media-player-center'>
          <div id='media-player-options-container'>

           <FontAwesome id='media-player-shuffle' name="random" aria-hidden='true'/>

           <button onClick={this.handlePrev} id='media-player-previous-song' className='next-prev'>
             <i className="material-icons">skip_previous</i>
           </button>

           <div id='media-player-play-pause'>
             <button id='media-player-play-button' onClick={this.handleToggle}>
               <i className="material-icons">
                 {(this.state.playing) ? 'pause_circle_outline' : 'play_circle_outline'}
               </i>
             </button>
           </div>

           <button onClick={this.handleNext} id='media-player-next-song' className='next-prev'>
             <i className="material-icons">skip_next</i>
           </button>

           <FontAwesome id='media-player-loop' name='repeat'/>

          </div>
          <div id='media-player-status-bar'>

              <p className='mp-time'>{  (this.state.seek !== undefined) ? secToMin(parseInt(this.state.seek)) : ''}</p>

                 <input
                   type='range'
                   min='0.00'
                   max={this.state.duration}
                   step='.05'
                   value={this.state.seek}
                   onChange={e => this.setState({seek: parseFloat(e.target.value)})}
                 />

               <p className='mp-time'>{(this.state.duration) ? secToMin(parseInt(this.state.duration)) : ''}</p>
          </div>
        </div>

        <div id='media-player-volume'>
            <button id='media-player-mute' onClick={this.handleMuteToggle}>
              <i className="material-icons">{this.state.mute ? 'volume_off' : 'volume_up'}</i>
            </button>

            <span id='media-player-slider-container'>
              <input
                type='range'
                min='0'
                max='1'
                step='.05'
                value={this.state.volume}
                onChange={e => this.setState({volume: parseFloat(e.target.value)})}
              />
            </span>
        </div>

      </div>
    );
  }


}

export default withRouter(MediaPlayer);
