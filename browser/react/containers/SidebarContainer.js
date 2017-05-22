import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from "react-redux"

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

class SidebarContainer extends Component {

  render() {
    return (
      <Sidebar {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
