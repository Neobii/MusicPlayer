import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const StationsList = ({ }) => (
  <React.Fragment>
    <h1>Station Name</h1>
    <h1>Description</h1>
  </React.Fragment>
)

registerComponent({name: 'StationsList', component: StationsList})