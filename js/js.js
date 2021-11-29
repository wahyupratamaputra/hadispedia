$( "#saran-button" ).click(function() {
  $( "#saran" ).slideToggle();
});

$( "#linimasa" ).hide();

$(window).bind('mousewheel DOMMouseScroll', function(event){
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    console.log("up");
    $( "#list-tokoh" ).slideDown();
    $( "#blankspace" ).slideDown();
    $( "#linimasa" ).slideUp();
  }
  else {
    $( "#list-tokoh" ).slideUp();
    $( "#blankspace" ).slideUp();
    $( "#linimasa" ).show();
    $( "#linimasa" ).slideDown();
    console.log("down");
  }
});