$(document).ready(function(){

	$("#menu").mmenu({

		"extensions": [
		"fx-panels-zoom"
		],
		"offCanvas": {
			"position": "right"
		}

		
	});

	 var api = $("#menu").data( "mmenu" );
	 api.bind("open:finish", function($panel) {
	 	$('#nav-toggle').addClass('active')
	 });
	 api.bind("close:finish", function($panel) {
	 	$('#nav-toggle').removeClass('active')
	 });

	


	/*document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });*/

})