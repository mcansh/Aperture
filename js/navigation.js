var $hamburger = $(".hamburger");
var $links = $(".links");
var $nav = $("nav");
var $scroll = $("body");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
  $links.toggleClass("is-open");
  $links.toggleClass("blur");
  $nav.toggleClass("blur")
  $scroll.toggleClass("no-scroll")
});
