import React from 'react';
import { registerComponent, Components } from 'meteor/vulcan:core';

const MediaPlayer = ({ }) => (
  <React.Fragment>
    <h1>Artist Name</h1>
    <h1>Song Title</h1>
    <h1>Start</h1>
    <h1>Next</h1>
  </React.Fragment>
)

registerComponent({name: 'MediaPlayer', component: MediaPlayer})