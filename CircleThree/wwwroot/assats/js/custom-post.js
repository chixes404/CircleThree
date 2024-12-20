(function ($) {
	"use strict";


	//Preloader

	Royal_Preloader.config({
		mode: 'scale_text',
		text: 'journal post',
		text_colour: '#212121',
		background: '#FFFFFF'
	});


	//Navigation	

	$('ul.slimmenu').on('click', function () {
		var width = $(window).width();
		if ((width <= 1200)) {
			$(this).slideToggle();
		}
	});
	$('ul.slimmenu').slimmenu(
		{
			resizeWidth: '1200',
			collapserTitle: '',
			easingEffect: 'easeInOutQuint',
			animSpeed: 'medium',
			indentChildren: true,
			childrenIndenter: '&raquo;'
		});


	//Home text fade on scroll	

	$(window).scroll(function () {
		var $Fade = $('.fade-elements');
		//Get scroll position of window 
		var windowScroll = $(this).scrollTop();
		//Slow scroll and fade it out 
		$Fade.css({
			'margin-top': -(windowScroll / 0) + "px",
			'opacity': 1 - (windowScroll / 400)
		});
	});


	

	window.scrollReveal = new scrollReveal();


	/* Scroll Too */

	$(window).load(function () {
		"use strict";

		/* Page Scroll to id fn call */
		$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector: "ul.slimmenu li a",
			offset: 78,
			scrollSpeed: 800,
			scrollEasing: "easeInOutCubic"
		});

		/* demo functions */
		$("a[rel='next']").click(function (e) {
			e.preventDefault();
			var to = $(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo", to);
		});

	});




	$(document).ready(function () {

		//Tooltip

		$(".tipped").tipper();


		//Video

		$(".columns").fitVids();


		//Slider				

		$("#owl-post-slider").owlCarousel({

			pagination: true,
			slideSpeed: 300,
			autoPlay: 5000,
			singleItem: true

		});


	});


})(jQuery);

































