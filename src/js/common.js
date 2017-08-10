$(document).ready(function(){

	function headHeight() {
		$( '#scene' ).css("height", $( window ).height());
	}
	headHeight()
	$( window ).resize(function() {
		headHeight()
	});

	$("#menu").mmenu({

		"slidingSubmenus": false,

		"extensions": [
		"fx-panels-zoom"
		],

		"offCanvas": {
			"position": "right"
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