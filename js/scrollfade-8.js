// fade out on scroll up



    // $(document).ready(function() {
    //
    //     var my_div = $(".hideme");
    //     var div_top = .hideme.offset().top;
    //
    //     $(document).scroll(function() {
    //         if (div_top <= $(document).scrollTop()) {
    //             // do some cool animations...
    //         }
    //     });
    //
    // });

// });



// https://stackoverflow.com/questions/48202389/fade-image-on-scrolling

$(function(){
  var element = $('.gallery-section');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      element.fadeIn();
    }
    else {
      element.fadeOut();
    }
   });
});
