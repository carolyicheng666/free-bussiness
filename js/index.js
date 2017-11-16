(function($) {
	"use strict";
	
	$('a.nav-link[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 88)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
})(jQuery);