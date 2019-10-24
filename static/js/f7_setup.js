var app = new Framework7({
  root: '#app',
  // App Name
  name: 'PWA Template',
  // App id
  id: 'pwa.template',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  }
});

var mainView = app.views.create('.view-main');