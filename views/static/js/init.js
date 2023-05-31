//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "5 August 2023 10:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
