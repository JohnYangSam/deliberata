
/* Particle Background */
$('#background').particleground({
  dotColor: '#eee',
  lineColor: '#eee',
  parallax: false,
  minSpeedX: .3,
  maxSpeedX: .2,
  minSpeedY: .1,
  maxSpeedY: .3
});

/* Card flipping */
$('.flip-container').hover(function (event) {
  /* JQuery 'this' needs to be wrapped in a JQuery syntax */
  $(this).toggleClass('hover');
});


/* Card clicking */
$('.back').click(function (event) {
  // JQuery 'this' needs to be wrapped in a JQuery syntax
  $.fn.fullpage.moveSlideRight();
  console.log($(this).data("link"));
});
/*
$('.flip-container').click(function (event) {
  // JQuery 'this' needs to be wrapped in a JQuery syntax
  console.log($(this).data("link"));
  $( ".flip-container, .back, .front" ).animate({
    "height": "50px",
    "width": "50px",
  });
  $( ".detail-section" ).animate({
    "width": "900px",
  });
  $(".front").delay(1).queue(function(){
    $(this).css({"background-image":"none"});
  });
  $(".back").each(function(index, elem) {
    switch(index) {
      case 0:
        $(elem).html('<p>H</p>');
        break;
      case 1:
        $(elem).html('<p>o</p>');
        break;
      case 2:
        $(elem).html('<p>m</p>');
        break;
      case 3:
        $(elem).html('<p>e</p>');
        break;
      case 4:
        $(elem).html('<p>.</p>');
        break;
      default:
        $(elem).html('<p>.</p>');
        break;
    }
  });
});
*/