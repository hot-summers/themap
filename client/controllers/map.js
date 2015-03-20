Template.map.rendered = function(){
  console.log('hi i iz map');
};

Template.body.map = function() {
  return Session.get('map');
}

Template.map.events({
  'click li': function(e, t) {
    e.preventDefault();
    console.log('yo');
  }
})
