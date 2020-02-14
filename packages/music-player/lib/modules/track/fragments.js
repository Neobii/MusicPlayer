import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment TracksFragment on Track {
     _id
     createdAt
   }
`);
