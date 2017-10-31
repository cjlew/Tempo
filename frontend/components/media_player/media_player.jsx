import React from 'react';
import ReactHowler from 'react-howler';
import raf from 'raf';
import { Link, withRouter } from 'react-router-dom';

class MediaPlayer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false,
      playing: false,
      loop: false,
      mute: false,
      volume: 1.0
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
  }


  componentWillUnmount () {
    this.clearRAF();
  }

  handleToggle() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
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

    return (
      <div id='media-player'>
        <div id='media-player-song-info'>
          <ReactHowler
              src={'http://s3-us-east-2.amazonaws.com/tempo-chris-dev/songs/audios/000/000/088/original/16_Mortal_Man.mp3?1509405823'}
              playing={this.state.playing}
              onLoad={this.handleOnLoad}
              onPlay={this.handleOnPlay}
              onEnd={this.handleOnEnd}
              loop={this.state.loop}
              mute={this.state.mute}
              volume={this.state.volume}
              ref={(ref) => (this.player = ref)}
            />
        </div>

        <div id='media-player-center'>
          <div id='media-player-options-container'>

            <label>
             Loop:
             <input
               id='media-player-loop'
               type='checkbox'
               checked={this.state.loop}
               onChange={this.handleLoopToggle}
             />
           </label>

           <button id='media-player-previous-song' className='next-prev'>
             <i className="material-icons">skip_previous</i>
           </button>

           <div id='media-player-play-pause'>
             <button id='media-player-play-button' onClick={this.handleToggle}>
               <i className="material-icons">
                 {(this.state.playing) ? 'pause_circle_outline' : 'play_circle_outline'}
               </i>
             </button>
           </div>

           <button id='media-player-next-song' className='next-prev'>
             <i className="material-icons">skip_next</i>
           </button>

           <button onClick={this.handleStop}>
             Stop
           </button>

          </div>
          <div id='media-player-status bar'>
            <p>

               {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}

               <input
                 type='range'
                 min='0.00'
                 max={this.state.duration}
                 step='.05'
                 value={this.state.seek}
               />

               {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
            </p>
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
