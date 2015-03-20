Template.map.rendered = function(){
  console.log('hi i iz map');
    console.log(Session.get('map'));
};

Template.map.resize = function() {
  return Session.get('map');
}

Template.navigation.events({
  'click li': function(e) {
    e.preventDefault();
    console.log('yo');
  }
})
