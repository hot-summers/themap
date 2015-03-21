Template.map.rendered = function(){
  $('svg').css({width: 800, height: 800});
  $(window).resize(function() {
    console.log('cool');
  });
};

Template.navigation.events({
  'mouseover li': function(e) {
    console.log(e);
    e.preventDefault();
    var $highlight = $(e.currentTarget).attr('class');
    console.log($highlight);

    $('svg path').attr('class', 'hidden');
    $("svg path[data-legality='legal']").attr('class', 'active');
  },
  'mouseout li': function(e) {
    $('svg path').attr('class', '');
  }
})
