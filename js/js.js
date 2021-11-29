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
  }
});

var ts;
$(document).bind('touchstart', function (e){
   ts = e.originalEvent.touches[0].clientY;
});

$(document).bind('touchend', function (e){
   var te = e.originalEvent.changedTouches[0].clientY;
   if(ts > te+5){
    $( "#list-tokoh" ).slideUp();
    $( "#blankspace" ).slideUp();
    $( "#linimasa" ).show();
    $( "#linimasa" ).slideDown();
   }else if(ts < te-5){
    $( "#list-tokoh" ).slideDown();
    $( "#blankspace" ).slideDown();
    $( "#linimasa" ).slideUp();
   }
});