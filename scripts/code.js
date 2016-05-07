/*::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::::::::::::::::: Jason Brooks :::::::::::::::::*/
/*::::::::::::::::::::::::::::::::::::::::::::::::*/

$(document).ready(function() {
	$('.row').fadeIn(1000);

	$('a').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('.row').fadeOut(1000, newpage);
	})

	function newpage() {
		window.location = newLocation;
	}


});