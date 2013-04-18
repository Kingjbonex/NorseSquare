$('#tabs').tabs();

$(function() {
	$('#icon-button').button({ 
		icons: { 
			primary: "ui-icon-circle-plus",
		},
	});

});
$(function() {
	$('#toggleButText')
	.button()
	.click(function() {
		var buttonText = $(".ui-button-text").html();
		if (buttonText == "&gt;<br>&gt;") $(".ui-button-text").html("&lt;<br>&lt;");
		else $(".ui-button-text").html("&gt;<br>&gt;");
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
