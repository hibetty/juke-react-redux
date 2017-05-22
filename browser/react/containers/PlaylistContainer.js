import React, {Component} from 'react';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

  const mapStateToProps = (state, ownProps) => {
    return {
      selectedPlaylist: state.playlists.selected,
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      toggleOne(song, list){
        dispatch(toggleSong(song, list))
      }
    }
  }

class PlaylistContainer extends Component {

  render() {
    console.log(this.props);
    return (
      <Playlist
        {...this.props}
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
