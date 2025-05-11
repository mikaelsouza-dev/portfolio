(function ($) {

  "use strict";

    // COLOR MODE
    document.querySelector('.color-mode').addEventListener('click', function() {
      document.querySelector('.color-mode-icon').classList.toggle('active');
      document.querySelector('body').classList.toggle('dark-mode');
    });
    
    // Set dark mode as default
    document.querySelector('.color-mode-icon').classList.add('active');
    document.querySelector('body').classList.add('dark-mode');

    // HEADER
    var navbar = document.querySelector(".navbar");
    var headroom = new Headroom(navbar);
    headroom.init();
    
    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

    (function($){
      new WOW().init();
  })

  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progressup");
    let progressValue = document.getElementById("progressup-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#a200ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  // Animated Text
  const animatedItems = document.querySelectorAll('.animated-item');
  let currentIndex = 0;

  function animateText() {
    animatedItems.forEach(item => item.classList.remove('active'));
    animatedItems[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % animatedItems.length;
  }

  // Start animation
  animateText();
  setInterval(animateText, 2000);

})(jQuery);
