// fade out on scroll up
// https://stackoverflow.com/questions/48202389/fade-image-on-scrolling
// https://jsfiddle.net/q5h1ocyw/1/
$(document).ready(function() {
   var myElement = $('.top');
   $(window).on('scroll', function () {
     var st = $(this).scrollTop();
     myElement.css({
        'opacity': 1 - st / 600
     });
  });
});
