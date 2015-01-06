var signatureLoader = new Vivus('signature-loader', {type: 'oneByOne', duration: 260}, function(){
	$('.preloader').fadeOut('slow');
});

signatureLoader.stop().reset().play();

$(document).ready(function(){
	$(function() {
		Grid.init();
	});
});