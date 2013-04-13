$('#tabs').tabs();

$('button').click(

	function() {
		var butt = document.getElementById("toggleButText");
		if (butt.value==">>") butt.value = "<<";
		else butt.value = ">>";
	},

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
