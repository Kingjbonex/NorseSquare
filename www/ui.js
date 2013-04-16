$('#tabs').tabs();

$('button').click(

	/*function() {
		var butt = document.getElementById("toggleButText");
		if (butt.innerHTML == "&gt;&gt;") butt.innerHTML = "&lt;&lt;";
		else butt.innerHTML = "&gt;&gt;";
	},*/

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
