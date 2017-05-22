import React, {Component} from 'react';
import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import { connect } from 'react-redux';


  const mapStateToProps = (state, ownProps) => {
    return {
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying,
      progress: state.player.progress,
      currentSongList: state.player.currentSongList
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      toggle(currentSong, currentSongList){
        dispatch(
          toggleSong(currentSong, currentSongList)
        );
      },
      prev(){
        dispatch(previous())
      },
      next(){
        dispatch(next())
      },
      setProgress(){
        dispatch(setProgress(AUDIO.currentTime / AUDIO.duration))
      }
    }
  }

class PlayerContainer extends Component {

  componentDidMount() {
    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.setProgress(AUDIO.currentTime / AUDIO.duration);
    });
  }

  render() {
    return <Player
      {...this.props}
    />;
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
