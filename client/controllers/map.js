Template.map.rendered = function(){
  $(window).resize(function() {
    console.log('cool');
  });
};

Template.navigation.events({
  'click li': function(e) {
    e.preventDefault();
    console.log('yo');
  }
})
