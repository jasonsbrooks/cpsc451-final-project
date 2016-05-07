/*::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::::::::::::::::: Jason Brooks :::::::::::::::::*/
/*::::::::::::::::::::::::::::::::::::::::::::::::*/

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


});