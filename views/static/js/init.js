//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "15 April 2023 10:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	