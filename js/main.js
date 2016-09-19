// @codekit-prepend "jquery-3.1.0.min.js";

var $hamburger = $(".hamburger"),
    $nav = $("nav");


$hamburger.on("click", function() {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
  $nav.toggleClass("is-open");
});


// @codekit-prepend "smoothscroll.js"

$('nav a[href^="#"]').click(function(){
  $hamburger.removeClass('is-active');
  $nav.removeClass('is-open');
});
