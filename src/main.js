import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './sass/index.scss';

import $ from 'jquery';
import 'bootstrap';
import {easeInOutExpo} from 'jquery.easing/jquery.easing.js';

(function() {
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
  /*$('.gotop').remove();
  $('<a href="#home" class="gotop nav-link">gotop</a>').appendTo(document.body);
  $(document).scroll(function() {
    $(this).scrollTop() > 200 ? $('.gotop').fadeIn() : $('.gotop').fadeOut();
  });
  $('.gotop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000, "easeInOutExpo");
  });*/

  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });
})();