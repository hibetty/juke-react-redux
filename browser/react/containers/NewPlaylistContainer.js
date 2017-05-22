import React from 'react';
import {connect} from "react-redux"
import NewPlaylist from '../components/NewPlaylist';
import store from '../store';
import {addNewPlaylist} from '../action-creators/playlists';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewPlaylist(name){
      dispatch(addNewPlaylist(name))
    }
  }
}

class NewPlaylistContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt){
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      dirty: true
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    console.log("WORRRKING")
    this.props.addNewPlaylist(this.state.inputValue);
  }

  render() {

    const dirty = this.state.dirty;
    const inputValue = this.state.inputValue;
    console.log(inputValue)
    let warning = '';

    if (!inputValue && dirty) warning = 'You must enter a name';
    else if (inputValue.length > 16) warning = 'Name must be less than 16 characters';

    return (
      <NewPlaylist
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        warning={warning}
      />
    );
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(NewPlaylistContainer)
