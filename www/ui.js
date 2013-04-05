$('#tabs').tabs();

$('button').toggle(

function() {
	$('#').css('left', '0')
}, function() {
	$('#map').css('left', '200px')
});