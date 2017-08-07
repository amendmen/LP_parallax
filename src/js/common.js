$(document).ready(function(){

	$("#menu").mmenu({

		"extensions": [
		"fx-panels-zoom"		
		],
		"offCanvas": {
			"position": "left",
			"zposition" : "front"
		}

		
	});

	var api = $("#menu").data( "mmenu" );

	api.bind("open:finish", function($panel) {
		$('#nav-toggle').addClass('active');
	});

	api.bind("close:finish", function($panel) {
		$('#nav-toggle').removeClass('active')
	});

	var scene = document.getElementById('scene')
	var parallax = new Parallax(scene)

})