$('#tabs').tabs();

$('button').toggle(

function() {
	$('#map').css('left', '0')
}, function() {
	$('#map').css('left', '200px')
});