/*::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::::::::::::::::: Jason Brooks :::::::::::::::::*/
/*::::::::::::::::::::::::::::::::::::::::::::::::*/

$(document).ready(function() {
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
	})

});