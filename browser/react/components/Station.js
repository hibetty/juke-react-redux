import React from 'react';
import { Link } from 'react-router'; //probably

import Songs from './Songs';

export default function Station(props) {
  console.log(props)

  return (
    <div>
      <h3>{ props.stationName } Station</h3>
      <Songs songs={props.filteredSong}
          currentSong={props.currentSong}
          isPlaying={props.isPlaying}
          toggleOne={props.toggleOne} />
    </div>
  )
}
