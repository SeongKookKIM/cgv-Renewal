$(function () {
  $(".sticky-wrapper > nav .sticky-cover li a")
    .stop()
    .mouseover(function () {
      $(".sticky-wrapper > nav .sticky-inner").stop().slideDown();
      $(".sticky-wrapper > nav .sticky-inner").css({ display: "flex" });
    });
  $(".sticky-wrapper > nav ")
    .stop()
    .mouseleave(function () {
      $(".sticky-wrapper > nav .sticky-inner").stop().slideUp();
    });
});
