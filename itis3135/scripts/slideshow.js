// slideshow.js
$(document).ready(function () {
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

  // Load dynamic header/footer
  $("#header").load("components/header.html");
  $("#footer").load("components/footer.html");
});