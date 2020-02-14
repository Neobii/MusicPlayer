import { addRoute } from 'meteor/vulcan:core';

addRoute({
  name: 'mediaPlayer',
  path: '/',
  componentName: 'MediaPlayer',
  layoutName: 'MainLayout'
});