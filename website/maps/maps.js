



function starter() {
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
	//panelDiv = document.getElementById('panel');
	//alert(myDiv.style.height + " " + winH);
	winH = winH * .98;
	mapDiv.style.height = winH + "px";
	//panelDiv.style.height = winH + "px";
}

function toggleBox(id){
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





//START OF lutherPolygon


//Event called on Click event
function mouseInfoWindow(event) {

  var contentString = "<b>"+this.polyName+"</b></br>";
  contentString += this.polyDesc + "</br>";
	  
  try {
		var coords = event.latLng;
  } catch(err) {
		var vertices = this.getPath();
		var bounds = new google.maps.LatLngBounds();

		for (var i =0; i < vertices.length; i++) {
			var xy = vertices.getAt(i);
			bounds.extend(new google.maps.LatLng(xy.lat(), xy.lng()));
		}

		var coords = bounds.getCenter();
  }
  
  map.panTo(coords);
  
  // Replace our Info Window's content and position
  infowindow.setContent(contentString);
  infowindow.setPosition(coords);

  infowindow.open(map);
};

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

var gmarkers = [];
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
	var desc = polygonCoords[polygon][2];
	var cat = polygonCoords[polygon][3];
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
		polyDesc: desc,
		category: cat,
		id: polygon
		
		 });

		//Set it on the Map
		//lutherPolygon.setMap(map);
		lutherPolygon.setVisible(true);
		gpolygons.push(lutherPolygon);
		
		// Add a listener for the click event
		google.maps.event.addListener(lutherPolygon, 'click', mouseInfoWindow);
		
		infowindow = new google.maps.InfoWindow({
			maxWidth: 100,
			maxHeight: 100	
		});
		  
};

var lutherMarker;
// Creating a MARKER and positioning it on the map
for (marker in markerCoords) {
	var name = markerCoords[marker][0];
	var coords = markerCoords[marker][1];
	var desc = markerCoords[marker][2];
	lutherMarker = new google.maps.Marker({
		position: coords,
		polyName: name,
		polyDesc: desc,
		map: map,
		id: marker
		 });

		gmarkers.push(lutherMarker);
		//Set it on the Map
		//lutherMarker.setMap(map);
		lutherMarker.setVisible(false);
		// Add a listener for the click event
		google.maps.event.addListener(lutherMarker, 'click', showArrays);
		
		infowindow = new google.maps.InfoWindow();

};

function selectMarker(mySel) {
	id = mySel.options[mySel.selectedIndex].value;
	for (var i=0; i<gmarkers.length; i++) {
		if (gmarkers[i].id == id) {
			google.maps.event.trigger(gmarkers[i],'click');
		}
	}
	//Resets option back to default
	mySel.selectedIndex = 0;
};

function selectPolygon(mySel) {
	id = mySel.options[mySel.selectedIndex].value;
	for (var i=0; i<gpolygons.length; i++) {
		if (gpolygons[i].id == id) {
			google.maps.event.trigger(gpolygons[i],'click');
		}
	}
	//Resets option back to default
	mySel.selectedIndex = 0;
};

function toggleCategory(mySel) {
	category = mySel.name;
	for (var i=0; i<gpolygons.length; i++) {
		thisPolygon = gpolygons[i];
		if (thisPolygon.category == category) {
			if (thisPolygon.getVisible()) {
				thisPolygon.setVisible(false);
			} else {
				thisPolygon.setVisible(true);
			}
		}
	}
};

function toggleStyle(mySel) {
	category = mySel.name;
	for (var i=0; i<gpolygons.length; i++) {
		thisPolygon = gpolygons[i];
		if (thisPolygon.category == category) {
			if (thisPolygon.getVisible()) {
				thisPolygon.setVisible(false);
			} else {
				thisPolygon.setVisible(true);
			}
		}
	}
};

//This sorts the lists
var temp1 = []
var temp2 = []
for (p in polygonCoords) temp1.push(gpolygons[p].polyName);
temp1.sort();
for (p in temp1) for (c in gpolygons) if (temp1[p]==gpolygons[c].polyName) temp2.push(gpolygons[c]);
gpolygons=temp2;

//This sorts the lists
var temp1 = []
var temp2 = []
for (p in markerCoords) temp1.push(gmarkers[p].polyName);
temp1.sort();
for (p in temp1) for (c in gmarkers) if (temp1[p]==gmarkers[c].polyName) temp2.push(gmarkers[c]);
gmarkers=temp2;


//Building Lists
var academicString = '<option value=""> - Academic - </option>';
//This is making the drop down menus
for (polygon in polygonCoords) {
	if (gpolygons[polygon].category == 'academic') {
		academicString = academicString + '<option value="' + gpolygons[polygon].id + '">' + gpolygons[polygon].polyName + '</option>';
	}
}
//document.getElementById("academic").innerHTML=academicString;

var residentialString = '<option value=""> - Residential - </option>';
//This is making the drop down menus
for (polygon in polygonCoords) {
	if (gpolygons[polygon].category == 'residential') {
		residentialString = residentialString + '<option value="' + gpolygons[polygon].id + '">' + gpolygons[polygon].polyName + '</option>' ;
	}
}
// document.getElementById("residential").innerHTML=residentialString;

var recreationalString = '<option value=""> - Recreational - </option>';
//This is making the drop down menus
for (polygon in polygonCoords) {
	if (gpolygons[polygon].category == 'recreational') {
		recreationalString = recreationalString + '<option value="' + gpolygons[polygon].id + '">' + gpolygons[polygon].polyName + '</option>' ;
	}
}
// document.getElementById("recreational").innerHTML=recreationalString;

var sustainabilityString = '<option value=""> - Sustainability - </option>';
//This is making the drop down menus
for (marker in markerCoords) {
	sustainabilityString = sustainabilityString + '<option value="' + gmarkers[marker].id + '">' + gmarkers[marker].polyName + '</option>' ;
}
// document.getElementById("sustainability").innerHTML=sustainabilityString;

var parkingString = '<option value=""> - Parking - </option>';
//This is making the drop down menus
for (polygon in polygonCoords) {
	if (gpolygons[polygon].category == 'parking') {
		parkingString = parkingString + '<option value="' + gpolygons[polygon].id + '">' + gpolygons[polygon].polyName + '</option>' ;
	}
}
// document.getElementById("parking").innerHTML=parkingString;








//Check if browser supports W3C Geolocation API
function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    //alert('Your latitude is :'+lat+' and longitude is '+long);
    var myPosition = new google.maps.LatLng(lat, long);

	if (myPosMarker != null) {
	  myPosMarker.setMap(null);
	}

	myPosMarker = new google.maps.Marker({
	map:map,
	draggable:false,
	animation: google.maps.Animation.DROP,
	position: myPosition
	});

}

function errorFunction(position) {
    alert('Error!');
}



/**
 * The HomeControl adds a control to the map that simply
 * returns the user to Chicago. This constructor takes
 * the control DIV as an argument.
 */

function findMe(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map.
  controlDiv.style.padding = '5px';

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '2px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to find your location';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<strong>Find Me</strong>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  google.maps.event.addDomListener(controlUI, 'click', function() {

	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	} else {
	    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
	}

  });
}

var myPosMarker;
var findMeDiv = document.createElement('div');
var findMe = new findMe(findMeDiv, map);
findMeDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(findMeDiv);
