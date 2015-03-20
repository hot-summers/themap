Meteor.startup(function() {

  /*
    Define environment variables.
   */
  var checkUser, id, user, users, _i, _len, _results;

  /*
    Generate Test Accounts
    Creates a collection of test accounts automatically on startup.
   */
  users = [
    {username:"admin",firstName:"Admin",lastName:"User",email:"admin@site.com",roles:['admin'], password: "asdf32#$2,d/1"}
  ];
  _results = [];
  for (_i = 0, _len = users.length; _i < _len; _i++) {
    user = users[_i];
    checkUser = Meteor.users.findOne({
      "emails.address": user.email
    });
    if (!checkUser) {
      id = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: {
          firstName: user.firstName,
          lastName: user.lastName
        }
      });
      if (user.roles.length > 0) {
        _results.push(Roles.addUsersToRoles(id, user.roles));
      } else {
        _results.push(void 0);
      }
    } else {
      _results.push(void 0);
    }
  }
  return _results;

  $(window).resize(function(evt) {
    Session.set("touch", new Date());
  });
});
