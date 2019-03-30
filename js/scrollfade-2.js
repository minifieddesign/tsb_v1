// fade out on scroll up



    $(document).ready(function() {

        var my_div = $(".hideme");
        var div_top = .hideme.offset().top;

        $(document).scroll(function() {
            if (div_top <= $(document).scrollTop()) {
                // do some cool animations...
            }
        });

    });

});
