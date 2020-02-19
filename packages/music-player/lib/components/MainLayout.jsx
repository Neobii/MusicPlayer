import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const MainLayout = ({ children }) => (
  <React.Fragment>
    { children }
  </React.Fragment>
)

registerComponent({name: 'MainLayout', component: MainLayout})