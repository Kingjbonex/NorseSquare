$('#tabs').tabs();

$(function() {
	$( ".icon-button" ).button({
			icons: { primary: "ui-icon-circle-plus" },
			text: false
	});      
});

$(function() {
	$('#toggleButText')
	.button()
	.click(function() {
		var buttonText = $(".ui-button-text").html();
		if (buttonText == "&lt;<br>&lt;") $(".ui-button-text").html("&gt;<br>&gt;");
		else $(".ui-button-text").html("&lt;<br>&lt;");
	});
});

$('#toggleButText').click(

	function() {
		$('#map').toggle();
		google.maps.event.trigger(map, 'resize');
		map.setZoom( map.getZoom() );
	}, 

	function() {
		$('#tabs').toggle();
		$('#map').toggleClass('extend-map');
		google.maps.event.trigger(map, 'resize');
		map.setZoom( map.getZoom() );
	}
);
