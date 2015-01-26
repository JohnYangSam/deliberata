
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

/* Card flipping */
$('.flip-container').click(function (event) {
  /* JQuery 'this' needs to be wrapped in a JQuery syntax */
  console.log($(this).data("link"));
});