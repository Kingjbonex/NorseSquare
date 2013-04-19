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
		var buttonText = $("#toggleButText").html();
		if (buttonText == "<span class='ui-button-text'>&gt;<br>&gt;</span>") $("#toggleButText").html("<span class='ui-button-text'>&lt;<br>&lt;</span>");
		else $("#toggleButText").html("<span class='ui-button-text'>&gt;<br>&gt;</span>");
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
	});
