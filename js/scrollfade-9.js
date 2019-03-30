// https://stackoverflow.com/questions/46038782/fade-in-gradually-at-the-bottom-of-the-page


$(window).on("scroll", function() {

  $(".gallery-section-one").css("opacity", 1 - $(window).scrollTop() / 320);
  if ($(window).scrollTop() >= 320) {
    $(".gallery-section-one").hide();
  } else {
    $(".gallery-section-one").show();
  }

  var t = 320;
  var sb = (($(document).height() - $(window).height()) - $(window).scrollTop());
  var f = sb / t;
  f = 1-f;
  $(".gallery-section-two h1").css("opacity", f);

  if (sb >= 320) {
    $(".gallery-section-two").hide();
  } else {
    $(".gallery-section-two").show();
  }

});
