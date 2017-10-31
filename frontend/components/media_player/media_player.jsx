import React from 'react';
import ReactHowler from 'react-howler';
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
  }

  render() {

    return (
      <div id='media-player'>
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
         <label>
           Mute:
           <input
             id='media-player-mute'
             type='checkbox'
             checked={this.state.mute}
             onChange={this.handleMuteToggle}
           />
         </label>
        </div>
        <div id='media-player-status'>
          <p>
            {'Status: '}
            {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
            {' / '}
            {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
          </p>
        </div>

        <div id='media-player-volume'>
          <label>
            Volume:
            <span id='media-player-slider-container'>
              <input
                type='range'
                min='0'
                max='1'
                step='.05'
                value={this.state.volume}
                onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                style={{verticalAlign: 'bottom'}}
              />
            </span>
            {this.state.volume.toFixed(2)}
          </label>
        </div>

        <div id='media-player-play-pause'>
          <button onClick={this.handleToggle}>
            {(this.state.playing) ? 'Pause' : 'Play'}
          </button>
          <button onClick={this.handleStop}>
            Stop
          </button>
        </div>
      </div>
    );
  }


}

export default withRouter(MediaPlayer);
