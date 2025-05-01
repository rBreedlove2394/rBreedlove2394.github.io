// slideshow.js
function setupSlideshow() {
  $(".thumb").on("click", function () {
    const newSrc = $(this).attr("src");
    const newCaption = $(this).data("caption");

    $("#mainImage").fadeOut(200, function () {
      $(this).attr("src", newSrc).fadeIn(200);
    });

    $(".caption").fadeOut(200, function () {
      $(this).text(newCaption).fadeIn(200);
    });
  });
}

// Wait until includes finish loading
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("HTMLIncludeLoaded", function () {
    setupSlideshow();
  });
});
