var $hamburger = $(".hamburger");
var $links = $(".links");
var $nav = $("nav");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
  $links.toggleClass("is-open");
  $links.toggleClass("blur");
  $nav.toggleClass("blur")
});
