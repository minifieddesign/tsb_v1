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



// https://jsfiddle.net/q5h1ocyw/1/

$(document).ready(function() {
   var myElement = $('.gallery-section');
   $(window).on('scroll', function () {
     var st = $(this).scrollTop();
     myElement.css({
        'opacity': 1 - st / 600
     });
  });
});
