$('#tabs').tabs();

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

$('#toggleButText').click(function() {
	
		var butt = document.getElementById("toggleButText");
		if (butt.innerHTML == "&gt;<br>&gt;") butt.innerHTML = "&lt;<br>&lt;";
		else butt.innerHTML = "&gt;<br>&gt;";
		
});
