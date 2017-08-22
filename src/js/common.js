$(document).ready(function() {

	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top - $('.top-fix').height() - 20;
		$('body,html').animate({scrollTop: top}, 1500);
	});	


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

	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	$( '.mem-wrap').hover(
		function() {
			$(this).children().next().css( 'bottom', '0')
		}, function() {
			$(this).children().next().css('bottom', '100%')
		});

	$('.carousel').carousel({
		interval: 5000
	})

});

window.onload = function() {
	$(".loader").fadeOut("slow");
	
};

