import { connect } from 'react-redux';

import Stations from '../components/Stations';

const convertSongsToStations = (songsArray) => {
  let obj = {};
  songsArray.forEach(song => {
    if (obj.hasOwnProperty(song.genre)){
      obj[song.genre].push(song);
    } else {
      obj[song.genre] = [song];
    }
  });

  return obj;
}

const mapStateToProps = (state) =>  {
  return {stations: convertSongsToStations(state.songs)}
};
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
