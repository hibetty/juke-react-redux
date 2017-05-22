import { connect } from 'react-redux';

import Station from '../components/Station';

const mapStateToProps = (state, ownProps) => {
  const stationName = ownProps.params.genreName;
  state.song.map(???)
}

const mapDispatchToProps = (dispatch, ownProps) => {

}


export default connect(mapStateToProps, mapDispatchToProps)(Station);
