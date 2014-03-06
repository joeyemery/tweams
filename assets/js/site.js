$(document).ready(function() {

	//forceFixedMenu();

});

function forceFixedMenu() {
	var ab_height = $('.app-bar').innerHeight();
	var sab_height = $('.sub-app-bar').innerHeight();

	$('.app-bar').css({
		'position':'fixed',
		'width':'100%',
		'top':'0'
	});

	$('.sub-app-bar').css({
		'position':'fixed',
		'width':'100%',
		'top':ab_height
	});

	$('#content').css('padding-top', (ab_height + sab_height));
}