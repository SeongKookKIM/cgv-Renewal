$(window).scroll(function () {
  let heroHeight = $("#video").height();
  let yPosition = $(document).scrollTop();

  if (yPosition <= heroHeight) {
    let effectFactor = yPosition / heroHeight;
    let rotation =
      effectFactor *
      (Math.PI / 2 - Math.asin((heroHeight - yPosition) / heroHeight));
    $(".hero")
      .css({
        "-webkit-transform": "rotateX(" + rotation + "rad)",
        transfrom: "rotateX(" + rotation + "rad)",
      })
      .find(".overlay")
      .css("opacity", effectFactor);
  }

  if (yPosition <= heroHeight) {
    $(".sticky-wrapper").removeClass("fixed");
  } else {
    $(".sticky-wrapper").addClass("fixed");
  }
});
