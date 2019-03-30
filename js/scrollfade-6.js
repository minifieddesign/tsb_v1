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



// https://www.superhi.com/blog/how-to-add-web-design-elements-that-fade-in-and-out-on-scroll

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".gallery-image")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
})
