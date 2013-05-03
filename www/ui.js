$('#tabs').tabs();
$(".right-button-icon" ).tooltip({ content: "Add friend" });

$(function() {
	$(".friend-icon-button").button({
		icons: { primary: "ui-icon-circle-plus" },
		text: false
	});
	$("#check-in-button").button({
		icons: { primary: "ui-icon-circle-check" },
		text: true
	});
	$("#login-button").button({
		icons: { primary: "ui-icon-locked" },
		text: true
	});
});

$(function() {
	$('#toggle-button-text')
	.button()
	.click(function() {
		var buttonText = $("#toggle-button-text").text();
		if (buttonText == ">>") $("#toggle-button-text").html("<<br><");
		else $("#toggle-button-text").html("><br>>");
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
