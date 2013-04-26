$('#tabs').tabs();

$(function() {
	$( ".friend-icon-button" ).button({
			icons: { primary: "ui-icon-circle-plus" },
			text: false
	});
	$("#check-in-button").button({
		icons: { primary: "ui-icon-circle-check" },
		text: true
	});
});

$(function() {
	$('#toggle-button-text')
	.button()
	.click(function() {
		var buttonText = $("#toggle-button-text").html();
		if (buttonText == "<span class='ui-button-text'>&gt;<br>&gt;</span>") $("#toggle-button-text").html("<span class='ui-button-text'>&lt;<br>&lt;</span>");
		else $("#toggle-button-text").html("<span class='ui-button-text'>&gt;<br>&gt;</span>");
	});
});


$('#toggle-button-text').click(
	function() {
		$('#map').toggle();
		google.maps.event.trigger(map, 'resize');
		map.setZoom( map.getZoom() );
	},
	function() {
		$('#primary-content-container').toggle();
		$('#map').toggleClass('extend-map');
		google.maps.event.trigger(map, 'resize');
		map.setZoom( map.getZoom() );
});