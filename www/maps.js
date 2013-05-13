function starter() { //setting up google maps map size
	var winH = 460;
	if (document.body && document.body.offsetWidth) {
	    winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
	    document.documentElement &&
	    document.documentElement.offsetWidth ) {
	    winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winH = window.innerHeight;
	}

	mapDiv = document.getElementById('map');

	mapDiv.style.height = winH - 120;

	google.maps.event.trigger(map, 'resize');
	map.setZoom( map.getZoom() );
 }

$(window).resize( function() { //calculates map height on resize of window
	var winH = 460;
	
	if (document.body && document.body.offsetWidth) {
	    winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
	    document.documentElement &&
	    document.documentElement.offsetWidth ) {
	    winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winH = window.innerHeight;
	}
	
	mapDiv = document.getElementById('map');
	mapDiv.style.height = winH - 120;
	
	google.maps.event.trigger(map, 'resize');
	map.setZoom( map.getZoom() );	
});

function toggleBox(id){ //toggles friend pane
	if (document.getElementById(id).style.display == "") {
		show = "none";
	} else {
		show = "";
	}
	document.getElementById(id).style.display = show;
}

var minZoomLevel = 15;

//Create Style Map Layer
var greenMap = new google.maps.StyledMapType(greenStyle, {name: "Green Map"});

//Create Map
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 17,
  center: new google.maps.LatLng(43.312632,-91.80508),
  zoomControl: true,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  panControl: false,
  mapTypeControl: false,
  mapTypeControlOptions: {
	  mapTypeId: [google.maps.MapTypeId.ROADMAP, 'green_map'] }
});

//Associate styled map with MapTypeID and set it to display
map.mapTypes.set('green_map', greenMap);
map.setMapTypeId('green_map');

// Bounds for Luther College
var allowedBounds = new google.maps.LatLngBounds(
 new google.maps.LatLng(43.307339,-91.815112), 
 new google.maps.LatLng(43.318705,-91.798375));

// Listen for the dragend event
google.maps.event.addListener(map, 'dragend', function() {
	if (allowedBounds.contains(map.getCenter())) return;

	 //Out of bounds - Move the map back within the bounds

	var c = map.getCenter(),
		 x = c.lng(),
		 y = c.lat(),
		 maxX = allowedBounds.getNorthEast().lng(),
		 maxY = allowedBounds.getNorthEast().lat(),
		 minX = allowedBounds.getSouthWest().lng(),
		 minY = allowedBounds.getSouthWest().lat();

	if (x < minX) x = minX;
	if (x > maxX) x = maxX;
	if (y < minY) y = minY;
	if (y > maxY) y = maxY;

	map.setCenter(new google.maps.LatLng(y, x));
});

// Limit the zoom level
google.maps.event.addListener(map, 'zoom_changed', function() {
 if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
});


//START OF polygons

//Event called on selection event
function showArrays(event) {

  var contentString = "<b>"+this.polyName+"</b></br>";
  contentString += this.polyDesc + "</br>";
  
  var coords = this.position;
  
  map.panTo(coords);

  // Replace our Info Window's content and position
  infowindow.setContent(contentString);
  infowindow.setPosition(coords);

  infowindow.open(map);
};

var gpolygons = [];

var aColor = "red";
var recColor = "blue";
var resColor = "yellow";
var susColor = "green";
var parkColor = "grey";
var tempColor = "black";

var lutherPolygon;
//Creating a POLYGON and positioning it on the map
for (polygon in polygonCoords) {
	var name = polygonCoords[polygon][0];
	var coords = polygonCoords[polygon][1];
	var cat = polygonCoords[polygon][2];
	if (cat == "academic") tempColor = aColor;
	if (cat == "recreational") tempColor = recColor;
	if (cat == "residential") tempColor = resColor;
	if (cat == "sustainability") tempColor = susColor;
	if (cat == "parking") tempColor = parkColor;
	
	lutherPolygon = new google.maps.Polygon({
		paths: coords,
		map: map,
		strokeColor: tempColor,
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: tempColor,
		fillOpacity: 0.35,
		polyName: name,
		category: cat,
		id: polygon,
		clickable:false
		
		 });

		//Set it on the Map
		//lutherPolygon.setMap(map);
		//lutherPolygon.setVisible(true);
		gpolygons.push(lutherPolygon);
		
		  
};


function saveLocation(lat, long)
{

	//call to checkin php service
	jQuery.post("./services/checkIn.php", {lat:lat,long:long,email:email}, function(data){/*alert(data)*/});

}

//shows users friends on map
function showFriend(fLat,fLong,fPhotourl) {
	for (var i = 0; i < myPosMarkers.length; i++ ) {
		myPosMarkers[i].setMap(null);
	}
	
	myPosMarkers = [];

	var image = new google.maps.MarkerImage(
		fPhotourl,
		new google.maps.Size(50, 50), // desired size
		new google.maps.Point(0, 0), // offset within the scaled sprite
		null, // anchor point is half of the desired size
		new google.maps.Size(50, 50) // scaled size of the entire sprite
	);

	var fPosition = new google.maps.LatLng(fLat, fLong);
	var myPosMarker = new google.maps.Marker({
		map:map,
		draggable:false,
		icon: image,
		animation: google.maps.Animation.DROP,
		position: fPosition
	});
	map.panTo(fPosition);
	myPosMarkers.push(myPosMarker);

}

//shows points on successful retreival of geolocation coordinates
function successFunction(myLat,myLong){
	for (var i = 0; i < myPosMarkers.length; i++ ) {
		myPosMarkers[i].setMap(null);
	}
	
	myPosMarkers = [];

	var image = new google.maps.MarkerImage(
		myPhotourl,
		new google.maps.Size(50, 50), // desired size
		new google.maps.Point(0, 0), // offset within the scaled sprite
		null, // anchor point is half of the desired size
		new google.maps.Size(50, 50) // scaled size of the entire sprite
	)

	saveLocation(myLat,myLong);

	var myPosition = new google.maps.LatLng(myLat, myLong);
	var myPosMarker = new google.maps.Marker({
		map:map,
		draggable:false,
		icon: image,
		animation: google.maps.Animation.DROP,
		position: myPosition
	});
	map.panTo(myPosition);
	myPosMarkers.push(myPosMarker);

}

//displayed when geolocation fails
function errorFunction(position) {
    alert('Error! Your computer hates you. (And geolocation is not working!)');
}

//called when user hits check in button
function checkIn(){
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position){myLat = position.coords.latitude;myLong = position.coords.longitude;successFunction(myLat,myLong);}, errorFunction);
	} else {
	    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
	}
};

//shows a users friends on the map
function showFriends(data) {
    for (var i = 0; i < myPosMarkers.length; i++ ) {
    	myPosMarkers[i].setMap(null);
    }
    myPosMarkers = [];
    var xml = data,
    xmlDoc = $.parseXML( xml ),
    $xml = $( xmlDoc ),
    $person = $xml.find( "response person" ).each(
	function(){
		var fname = $(this).find("fname").text(),
		lname = $(this).find("lname").text(),
		lat = $(this).find("latitude").text(),
		long = $(this).find("longitude").text(),
		time = $(this).find("time").text(),
		gid = $(this).find("googleid").text(),
		url = $(this).find("photourl").text();
		friendImage = new google.maps.MarkerImage(
			url,
			new google.maps.Size(50, 50), // desired size
			new google.maps.Point(0, 0), // offset within the scaled sprite
			null, // anchor point is half of the desired size
			new google.maps.Size(50, 50) // scaled size of the entire sprite
		);

		var myPosition = new google.maps.LatLng(lat, long);
		var myPosMarker = new google.maps.Marker({
			map:map,
			draggable:false,
			icon: friendImage,
			title: fname + " " + lname + " @ " + time,
			animation: google.maps.Animation.DROP,
			position: myPosition
		});
		
		myPosMarkers.push(myPosMarker);
	});
		
}

//makes php service call to find all friends
function findAll(id, controlDiv, map) {
	users = jQuery.get("./services/getFriends.php",{uid:id}, function(data){showFriends(data);},'text');
}

//clicks janrain link when login clicked
function loginFunction() {
    $('#janrainLink').click();
}




var contextMenuOptions={};
contextMenuOptions.classNames={menu:'context_menu', menuSeparator:'context_menu_separator'};

//	create an array of ContextMenuItem objects
var menuItems=[];
menuItems.push({className:'context_menu_item', eventName:'checkIn_here', label:'Check-In Here'});
contextMenuOptions.menuItems=menuItems;

//	create the ContextMenu object
var contextMenu=new ContextMenu(map, contextMenuOptions);

//	display the ContextMenu on a Map right click
google.maps.event.addListener(map, 'rightclick', function(mouseEvent){
	contextMenu.show(mouseEvent.latLng);
});

//	listen for the ContextMenu 'menu_item_selected' event
google.maps.event.addListener(contextMenu, 'menu_item_selected', function(latLng, eventName){
	//	latLng is the position of the ContextMenu
	//	eventName is the eventName defined for the clicked ContextMenuItem in the ContextMenuOptions
	switch(eventName){
		case 'checkIn_here':
			var lat = latLng.lat();
			var lng = latLng.lng();
			// populate yor box/field with lat, lng
			successFunction(lat,lng);
			break;
	}
});





var here = 'outside';
var friendImage;
var myLat;
var myLong;
var myPosMarkers = [];

