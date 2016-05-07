$(document).ready(function() {
	$("#bottom-image-gallery-scroller").scroll(function() {
		$("#left-gallery-scroll-arrow").css('left', 15+$(this).scrollLeft());
		$("#right-gallery-scroll-arrow").css('left', 595+$(this).scrollLeft());
		if ($(this).scrollLeft() == 0) {
			$('#left-gallery-scroll-arrow').hide();
		} else {
			$('#left-gallery-scroll-arrow').show();
		}

		if ($(this).scrollLeft() + 620 > (83*$("#bottom-image-gallery-scroller > img").length - 3)) {
			$('#right-gallery-scroll-arrow').hide();
		} else {
			$('#right-gallery-scroll-arrow').show();
		}
	});

	$("#bottom-image-gallery-scroller > img").on("click", function() {
		console.log("An image has been clicked");
		$("#main-image").attr("src", $(this).attr('src'));
	})
});