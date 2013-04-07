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
  winH = winH * .85;
  mapDiv.style.height = winH + "px";
  mapDiv.checkResize()
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
		/*google.maps.event.addListener(lutherPolygon, 'click', mouseInfoWindow);
		
		infowindow = new google.maps.InfoWindow({
			maxWidth: 100,
			maxHeight: 100	
		});*/

    		tooltip.innerHTML = name;

    		google.maps.event.addListener(lutherPolygon,'mouseover',function(){
        		tooltip.show("<strong>"+name+"</strong>")
    		});
    		google.maps.event.addListener(lutherPolygon,'mouseout',function(){
        		tooltip.hide();
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



function saveLocation(lat, long)
{

	jQuery.post("./services/checkIn.php", {lat:lat,long:long,email:email}, function(data){/*alert(data)*/});

}

function successFunction(position){
	var image;	
	if (email == "") {
		image = new google.maps.MarkerImage('http://maps.google.com/mapfiles/marker.png');
	} else {
		var UID = gid;
		jQuery.ajax({
			type: "POST",
			url: "./services/getPhoto.php",
			data: {UID:UID}, 
			async: false,
			success: function(data){
				if (!data){image = new google.maps.MarkerImage('http://maps.google.com/mapfiles/marker.png');}
				else {
				 	image = new google.maps.MarkerImage(
						data,
						new google.maps.Size(50, 50), // desired size
						new google.maps.Point(0, 0), // offset within the scaled sprite
						null, // anchor point is half of the desired size
						new google.maps.Size(50, 50) // scaled size of the entire sprite
					   )
				}
		}});
	}

	myLat = position.coords.latitude;
	myLong = position.coords.longitude;

	var myPosition = new google.maps.LatLng(myLat, myLong);
	var myPosMarker = new google.maps.Marker({
	map:map,
	draggable:false,
	icon: image,
	animation: google.maps.Animation.DROP,
	position: myPosition
	});

	myPosMarkers.push(myPosMarker);

	if (email == "") {
		alert("Your location has been found, but will not be saved unless you login.");
	} else {	
		saveLocation(myLat,myLong);
	}

}

function errorFunction(position) {
    alert('Error!');
}

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
		gid = $(this).find("googleid").text();
		
		var friendImage;
		jQuery.ajax({
			type: "POST",
			url:"./services/getPhoto.php",
			data: {UID:gid},
			async: false, 
			success: function(data){
				if (!data){image = new google.maps.MarkerImage('http://maps.google.com/mapfiles/marker.png');}
				else {
					friendImage = new google.maps.MarkerImage(
						data,
						new google.maps.Size(50, 50), // desired size
						new google.maps.Point(0, 0), // offset within the scaled sprite
						null, // anchor point is half of the desired size
						new google.maps.Size(50, 50) // scaled size of the entire sprite
				   );
				}
		}});

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

function findAll(controlDiv, map) {
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
  controlText.innerHTML = '<strong>Find ALL!</strong>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  google.maps.event.addDomListener(controlUI, 'click', function() {

	users = jQuery.post("./services/findAll.php",{}, function(data){showFriends(data);},'text');

  });
}

function findMe(controlDiv, map) {
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



function login(controlDiv, map) {
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
  controlText.innerHTML = '<strong>Login</strong>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners:.
  google.maps.event.addDomListener(controlUI, 'click', function() {
  	    $('#janrainLink').click()
  });



}

var here = 'outside';
var friendImage;
var myLat;
var myLong;
var myPosMarkers = [];
var findMeDiv = document.createElement('div');
var findAllDiv = document.createElement('div');
var loginDiv = document.createElement('div');
var findMe = new findMe(findMeDiv, map);
var findAll = new findAll(findAllDiv, map);
var login = new login(loginDiv, map);
findMeDiv.index = 1;
findAllDiv.index = 1;
loginDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(loginDiv);
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(findMeDiv);
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(findAllDiv);


