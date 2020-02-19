import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment StationsFragment on Station {
     _id
     createdAt
   }
`);
