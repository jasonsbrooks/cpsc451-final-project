$(document).ready(function() {
	$('.row').fadeIn(500);

	$('a').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('.row').fadeOut(500, newpage);
	})

	function newpage() {
		window.location = newLocation;
	}


	$('.description').on('click', function() {
		if ($(this).hasClass("expanded")) {
			$(this).animate({height: 67}, 200);
			$('.main-image-caption').animate({height: 67}, 0);
			$(this).removeClass("expanded");
			$("#elipse-image").fadeIn();
		} else {
			$(this).addClass("expanded");
			$("#elipse-image").hide();
			$(this).animate({height: 125}, 200);
			$('.main-image-caption').animate({height: 125}, 0);
		}
	});

	$("#bottom-image-gallery-scroller").scroll(function() {
		$("#left-gallery-scroll-arrow").css('left', 8+$(this).scrollLeft());
		$("#right-gallery-scroll-arrow").css('left', 595+$(this).scrollLeft());
		if ($(this).scrollLeft() < 2) {
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

	$("#bottom-image-gallery-scroller > img, #bottom-image-gallery-scroller > * > img").on("click", function() {
		$("#main-image").attr("src", $(this).attr('src'));
		$("#bottom-image-gallery-scroller").find("img").removeClass("image-selected");
		$(this).addClass("image-selected");
	});
});