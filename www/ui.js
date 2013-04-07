$('#tabs').tabs();

$('button').click(

function() {
	$('#map').toggle()
}, function() {
	$('#tabs').toggle()
	$('#map').toggleClass('extend-map');
});