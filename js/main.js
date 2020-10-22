$(".menu").click(function (e) {
	e.preventDefault(), $(this).toggleClass("is-active"),
		$(".nav").toggleClass("opened"), $("html").toggleClass("overflow");
	$(".nav__link").click(function (e) {
		e.preventDefault();
		if ($(window).width() <= 768) {
			$(".header__nav").removeClass("opened");
			$("html").removeClass("overflow");
			$(".menu").removeClass("is-active");
		}
	})
})
jQuery(document).ready(($) => {
	$('.accordion__block').click(function () {
		$(this).find('.accordion__close').toggleClass('open');
		$(this)
			.next('.accordion__open')
			.slideToggle('fast', () => {
				// Do something maybe ..
			});
	});

	$('.question__block').click(function () {
		let container = $(this).parents('.question');
		let answer = container.find('.question__answer');
		let trigger = container.find('.question__arrow');

		answer.slideToggle(200);

		if (trigger.hasClass('question__rotated')) {
			trigger.removeClass('question__rotated');
		} else {
			trigger.addClass('question__rotated');
		}

		if (container.hasClass('expanded')) {
			container.removeClass('expanded');
		} else {
			container.addClass('expanded');
		}
	})
})

$(document).ready(function(){
	$("a[href^='#']").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});
});





