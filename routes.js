Router.configure({
  layoutTemplate: 'layout'
});

Router.route('index', {
  path: '/',
  template: 'map',
  onBeforeAction: function() {
    this.next();
  }
});
