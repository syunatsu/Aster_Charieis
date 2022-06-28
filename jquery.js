$(function() {
  $('.top-image img:nth-child(n+2)').hide();
   topImages = setInterval(function() {
    $('.top-image img:nth-child(1)').fadeOut(3000);
    $('.top-image img:nth-child(2)').fadeIn(3000);
    $('.top-image img:nth-child(1)').appendTo('.top-image');
  },5000);
});