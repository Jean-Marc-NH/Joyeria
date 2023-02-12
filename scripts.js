$(document).ready(function(){
	var altura = $('.header').offset().top + 350;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.header').addClass('fixed');
			$('.logo').addClass('logo-s');
		} else {
			$('.header').removeClass('fixed');
			$('.logo').removeClass('logo-s');
		}
	});

});