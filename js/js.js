$( "#saran-button" ).click(function() {
  $( "#saran" ).slideToggle();
});

$(window).scroll(function() {
  var hT = $('#linimasa').offset().top,
      hH = $('#linimasa').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    $( "#list-tokoh" ).slideUp();
    $( "#blankspace" ).slideUp();
  }else{
    $( "#list-tokoh" ).slideDown();
    $( "#blankspace" ).slideDown();
    $(".hadispedia-center").css("min-height", "60vh")
  }
});