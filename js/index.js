(function($) {
	"use strict";

	// Smooth scrolling using jQuery easing
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

	// Closes responsive menu when a scroll trigger link is clicked
  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Add and remove class when navbar link is clicked
  $('.nav-link').click(function() {
    $(this).parent().siblings(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

  // Go top
  $(document.body).find(".gotop").remove();
	$('<a href="javascript:;" class="gotop">gotop</a>').appendTo(document.body);
	$(window).on("scroll", function() {
    var e = $(window).scrollTop();
    e > 200 ? $(document).find(".gotop").fadeIn() : $(document).find(".gotop").fadeOut();
  });
  $(document).on("click", ".gotop", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 300);
  });
})(jQuery);