

var userAuthenticatedAdmin = function() {
  var isAdmin, loggedInUser;
  loggedInUser = Meteor.user();
  isAdmin = Roles.userIsInRole(loggedInUser, ['admin']);
  if (!Meteor.loggingIn() && isAdmin) {
    // return Router.go('/invites');
    return this.next();
  } else {
    return this.next();

  }
};

Router.onBeforeAction(userAuthenticatedAdmin, {
  only: ['admin']
});
