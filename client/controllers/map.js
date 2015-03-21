Template.map.rendered = function(){
  $('svg').css({width: 800, height: 400});
  $(window).resize(function() {
    console.log('cool');
  });
};

Template.navigation.events({
  'click li': function(e) {
    e.preventDefault();
    var $highlight = $(e.currentTarget).attr('class');

    $('svg .'+$highlight).addClass('active');
  }
})
