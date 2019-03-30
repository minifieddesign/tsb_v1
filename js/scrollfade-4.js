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




// https://stackoverflow.com/questions/46437376/element-fade-in-on-scroll-pure-vanilla-javascript

$(document).ready(function() {
    function inView (el) {
      var sb = section.getBoundingClientRect();
      var eb = el.getBoundingClientRect();
      return !((eb.top + eb.height < 0) || (eb.top > sb.height));
    }

    function updateInView() {
      for (x of document.querySelectorAll('gallery-image')) {
        if (inView(x)) x.classList.add('inview')
        else x.classList.remove('inview');
      }
    }

    section.onscroll = updateInView;

    updateInView();
});
