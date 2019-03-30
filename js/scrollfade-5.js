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



// https://jsfiddle.net/un2bdvfm/
// https://jsfiddle.net/un2bdvfm/10/

$(document).ready(function() {
        $(window).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 1000);
            if (opacity > 0) {
                $('.gallery-image').css('opacity', opacity);
            }
        });
    });
