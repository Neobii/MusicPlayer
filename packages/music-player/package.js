Package.describe({
  name: 'music-player',
});

Package.onUse((api) => {
  api.use(['vulcan:core']);

api.mainModule('lib/server/main.js', 'server');
api.mainModule('lib/client/main.js', 'client');
});
