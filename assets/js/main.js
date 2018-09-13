(function($) {
	'use strict';

	$(window).on('load', function() {
		$('body').addClass('loaded');
	});

	/*=========================================================================
    	Sticky Header
=========================================================================*/

	$(function() {
		var header = $('#header'),
			yOffset = 0,
			triggerPoint = 100;
		$(window).on('scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.removeClass('animated fadeIn');
				header.addClass('navbar-fixed-top animated fadeInDown');
			} else {
				header.removeClass('navbar-fixed-top animated fadeInDown');
				header.addClass('animated fadeIn');
			}
		});
	});
	/*=========================================================================
         Main Slider
=========================================================================*/
	$(document).ready(function() {
		$('#main-slider').owlCarousel({
			loop: true,
			autoplay: true,
			smartSpeed: 500,
			items: 1,
			nav: true,
			navText: [ '<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>' ]
		});
		$('#main-slider').on('translate.owl.carousel', function() {
			$('.main_slide .slider_content h3').removeClass('animated fadeInUp').css('opacity', '0');
			$('.main_slide .slider_content h1').removeClass('animated fadeInUp').css('opacity', '0');
			$('.main_slide .slider_content p, .main_slide .slider_content .btn_group')
				.removeClass('animated fadeInUp')
				.css('opacity', '0');
		});

		$('#main-slider').on('translated.owl.carousel', function() {
			$('.main_slide .slider_content h3').addClass('animated fadeInUp').css('opacity', '1');
			$('.main_slide .slider_content h1').addClass('animated fadeInUp').css('opacity', '1');
			$('.main_slide .slider_content p, .main_slide .slider_content .btn_group')
				.addClass('animated fadeInUp')
				.css('opacity', '1');
		});
	});

	/*=========================================================================
    Gallery Slider
=========================================================================*/

	$('#gallery-slide').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 500,
		items: 1,
		dots: false,
		nav: true,
		navText: [ '<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>' ]
	});

	/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

	/*=========================================================================
        Testimonial Carousel
=========================================================================*/
	$('#testimonial_carousel').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 500,
		items: 1,
		nav: false
	});

	/*=========================================================================
    Food Carousel
=========================================================================*/
	$('#food_carousel').imagesLoaded(function() {
		$('#food_carousel').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			smartSpeed: 500,
			nav: false,
			dots: false,
			responsive: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 3
				},
				768: {
					items: 4
				}
			}
		});
	});

	/*=========================================================================
  Scroll To Top
=========================================================================*/

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('#scroll-to-top').fadeIn();
		} else {
			$('#scroll-to-top').fadeOut();
		}
	});
})(jQuery);
