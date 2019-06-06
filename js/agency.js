(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  //Contact display block
  $("#showcontact").click(function(){
    $("#contactbefore").hide(1000,'swing').fadeOut(800, 'swing',
    $("#contactafter").show(1000,'swing'),faidIn(800, 'swing') );
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  var height = window.innerHeight * 0.6;

  // Collapse Navbar
  var space = 0;
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    if($("#information").offset().top - window.scrollY < height && space == 0){
      $("#information").attr('style', 'visibility:visible');
      $("#infohead").addClass("zoomInDown");
      $("#infoleft").addClass("fadeInLeftBig");
      $("#inforight").addClass("fadeInRightBig");
      space = 1;
    }
    if($("#portfolio").offset().top - window.scrollY < height && space == 1){
      $("#portfolio").attr('style', 'visibility:visible');
      $("#porthead").addClass("bounceInUp");
      $(".portfolio-item").addClass("zoomInUp");
      space = 2;
    }
    if($("#about").offset().top - window.scrollY < height && space == 2){
      $("#about").attr('style', 'visibility:visible');
      $("#abouthead").addClass("zoomIn");
      $("#about1").attr('style', 'visibility:visible');
      $("#about1").addClass("flipInX");
    }
    if($("#about2").offset().top - window.scrollY < height + 30 && space == 2){
      $("#about2").attr('style', 'visibility:visible');
      $("#about2").addClass("flipInX");
    }
    if($("#about3").offset().top - window.scrollY < height + 30 && space == 2){
      $("#about3").attr('style', 'visibility:visible');
      $("#about3").addClass("flipInX");
    }
    if($("#about-last").offset().top - window.scrollY < height + 30 && space == 2){
      $("#about-last").attr('style', 'visibility:visible');
      $("#about-last").addClass("flipInX");
      space = 3;
    }
    if($("#contact").offset().top - window.scrollY < height && space == 3){
      $("#contact").attr('style', 'visibility:visible');
      $("#contact").addClass("rollIn");
      space = 4;
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  //Animation
  


})(jQuery); // End of use strict
