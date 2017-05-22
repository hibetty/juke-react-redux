import { connect } from 'react-redux';
import {convertSong} from "../utils.js";
import {toggleSong} from "../action-creators/player"

import Station from '../components/Station';

const mapStateToProps = (state, ownProps) => {
  const stationName = ownProps.params.genreName;
  let filteredSong = state.songs.filter(song => {
    return song.genre === stationName
  }).map(convertSong)
  return {
    stationName,
    filteredSong,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Station);
