<?php
  ini_set('display_errors', 'On');
  $rpx_api_key = "afb1996de68eb3aa1764c1bca05843a2017c7412";
  if(isset($_POST['token'])){
	$token = $_POST['token'];


	  if(strlen($token) == 40) {
	    $post_data = array('token'  => $token,
		               'apiKey' => $rpx_api_key,
		               'format' => 'json',
		               'extended' => 'true');
	    $curl = curl_init();
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	    curl_setopt($curl, CURLOPT_URL, 'https://rpxnow.com/api/v2/auth_info');
	    curl_setopt($curl, CURLOPT_POST, true);
	    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
	    curl_setopt($curl, CURLOPT_HEADER, false);
	    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	    curl_setopt($curl, CURLOPT_FAILONERROR, true);
	    $result = curl_exec($curl);
	    if ($result == false){
	      echo "\n".'Curl error: ' . curl_error($curl);
	      echo "\n".'HTTP code: ' . curl_errno($curl);
	      echo "\n"; var_dump($post_data);
	    }
	    curl_close($curl);

	    $auth_info = json_decode($result, true);

	    if ($auth_info['stat'] == 'ok') {
	      $email = $auth_info['profile']['email'];
	      $fname = $auth_info['profile']['name']['givenName'];
	      $lname = $auth_info['profile']['name']['familyName'];
	      $gid = $auth_info['profile']['googleUserId'];
	      setcookie('email', $email, time() + 60*60*24, '/');
		 setcookie('fname', $fname, time() + 60*60*24, '/');
		 setcookie('lname', $lname, time() + 60*60*24, '/');
		 setcookie('gid', $gid, time() + 60*60*24, '/');
	      	      	      	      
	    }
	  }
  } else {
	if (isset($_COOKIE)) {
		$email = $_COOKIE['email'];
		$fname = $_COOKIE['fname'];
		$lname = $_COOKIE['lname'];
		$gid = $_COOKIE['gid'];

	}
  }

?>

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
   <script type="text/javascript" src="polygonContainer.js"></script>
   <script type="text/javascript" src="polygons.js"> </script>

<script type="text/javascript">
  var email = "<?php   if(isset($_POST['token'])){Print($email);} else {if (isset($_COOKIE)) {Print($email);}}?>";
  var fname = "<?php   if(isset($_POST['token'])){Print($fname);} else {if (isset($_COOKIE)) {Print($fname);}}?>";
  var lname = "<?php   if(isset($_POST['token'])){Print($lname);} else {if (isset($_COOKIE)) {Print($lname);}}?>";
  var gid = "<?php   if(isset($_POST['token'])){Print($gid);} else {if (isset($_COOKIE)) {Print($gid);}} ?>";
  var myPhotourl;
  var userId;
</script>

<html> 
<head> 
	<link rel="stylesheet" type="text/css" href="stylesheet.css" />
	<link rel="stylesheet" type="text/css" href="css/custom-theme/jquery-ui-1.10.2.custom.css" />
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/> 
	<title>NorseSquare</title> 
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript">
    (function() {
        if (typeof window.janrain !== 'object') window.janrain = {};
        if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};
        
        janrain.settings.tokenUrl = 'http://norsesquare.luther.edu/maps.php';//switch to internal server
    

    janrain.settings.tokenUrl = 'http://norsesquare.luther.edu/maps.php';//switch to internal server

    function isReady() { janrain.ready = true; };
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", isReady, false);
    } else {
      window.attachEvent('onload', isReady);
    }

    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget';

    if (document.location.protocol === 'https:') {
      e.src = 'https://rpxnow.com/js/lib/luther-bargain-books/engage.js';
    } else {
      e.src = 'http://widget-cdn.rpxnow.com/js/lib/luther-bargain-books/engage.js';
    }

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);

	function getLocation(coordinate) {
		var building = "Off-Campus";
		for (polygon in polygonCoords) {
			var name = polygonCoords[polygon][0];
			var coords = polygonCoords[polygon][1];
			var cat = polygonCoords[polygon][2];
	
			lutherPolygon = new google.maps.Polygon({
				paths: coords,
				id: polygon
			 });
			if (lutherPolygon.containsLatLng(coordinate)) {building = name;}
	 		};

	 	lutherPolygon = new google.maps.Polygon([new google.maps.LatLng(43.319933,-91.805792), new google.maps.LatLng(43.319933,-91.811457), new google.maps.LatLng(43.313188,-91.810255), new google.maps.LatLng(43.309722,-91.808538), new google.maps.LatLng(43.309597,-91.80665), new google.maps.LatLng(43.308629,-91.806693), new google.maps.LatLng(43.308723,-91.803217), new google.maps.LatLng(43.309535,-91.803002), new google.maps.LatLng(43.309441,-91.800127), new google.maps.LatLng(43.310909,-91.800127), new google.maps.LatLng(43.310909,-91.798282), new google.maps.LatLng(43.312345,-91.798754), new google.maps.LatLng(43.313001,-91.79944), new google.maps.LatLng(43.313282,-91.798754), new google.maps.LatLng(43.314,-91.798925), new google.maps.LatLng(43.313688,-91.799955), new google.maps.LatLng(43.315561,-91.801972), new google.maps.LatLng(43.316155,-91.798711), new google.maps.LatLng(43.317622,-91.798067), new google.maps.LatLng(43.318371,-91.799655), new google.maps.LatLng(43.318777,-91.801414), new google.maps.LatLng(43.317841,-91.803732)],'#FF0000',1,0.6,'#FF0000',0.4);

	 	if (building == "Off-Campus" && lutherPolygon.containsLatLng(coordinate)) {building = "Luther College";}
	 		
	 	return building;
	}

function sendRequest(myUid,friendUid){
	//jQuery.get("./services/request.php", {type:'send', uid:myUid, fuid:friendUid});
	jQuery.ajax({
		url:"./services/request.php?fuid="+friendUid+"&uid="+uid+"&type=send"
		async: false
	});
	window.location.reload();
}

function acceptRequest(myUid,friendUid){
	jQuery.get("./services/request.php", {type:'accept', uid:myUid, fuid:friendUid});
}

    //Calling function to create new user
    if(email != "") {
		jQuery.get("./services/login.php", {fname:fname, lname:lname, email:email, gid:gid}, function(data){
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
					photo = $(this).find("photourl").text(),
					coordinate = new google.maps.LatLng(lat,long),
					location = getLocation(coordinate);
					userId = $(this).find("uid").text();
					myPhotourl = photo;
					document.getElementById('login-button-container').innerHTML = '<button id="login-button" onClick="location.href=&quot;./services/logout.php&quot;">Logout</button>';
					$('#show-all-button').append("<button id='show-all-friends' onclick='findAll("+userId+");'>Show all friends</button>");
					$('#show-all-friends').button({ text: true });
					$('#personal-status').append("<div class='personal-image'><img src='" + photo + "'/></div><div class='personal-text'> <span class='name'>" + fname + " " + lname + "</span><span class='ui-icon ui-icon-flag'></span><span class='location'>" + location + "</span><span class='ui-icon ui-icon-clock'></span><span class='check-in-date'>" + time + "</span></div><div class='check-in'><button id='check-in-button'>Check-in</button></div>");
					$("#check-in-button").button({
						icons: { primary: "ui-icon-circle-check" },
						text: true
					}).click(function(){checkIn();});
			


			jQuery.get("./services/request.php", {type:'getpending',uid:userId}, function(data){
				// get pending friends
				var xml = data,
				i = 1,
				xmlDoc = $.parseXML( xml ),
				$xml = $( xmlDoc ),
				$person = $xml.find( "response person" ).each(
					function(){
						var friendImage;
						var fname = $(this).find("fname").text(),
						lname = $(this).find("lname").text(),
						uid = $(this).find("uid").text(),
						usergid = $(this).find("googleid").text(),
						friendImage = $(this).find("photourl").text(),
						pending = $(this).find("pending").text(),
						plusUrl = "http://plus.google.com/" + usergid;
						if (gid != usergid) {
							if (pending == 2){
								$('#friends-list-item-container').append('<div class="list-item"><div class="profile-image"><a href="' + plusUrl + '" target="_blank"><img src="' + friendImage + '"></a></div><div class="list-item-text"><span class="name">'+ fname + " " + lname + " "+'</span></div><div class="accept-request"><button class="accept-request-button-'+i+'">Accept Request</button></div></div>'); 
								$(".accept-request-button-"+i).button({
									text: true
								}).click(function(){acceptRequest(userId,uid);});
							}
							else{
								$('#friends-list-item-container').append('<div class="list-item"><div class="profile-image"><a href="' + plusUrl + '" target="_blank"><img src="' + friendImage + '"></a></div><div class="list-item-text"><span class="name">'+ fname + " " + lname + " "+'</span><span class="request-pending">Request Pending</span></div></div>');
							}
						}
					}
				);	
			}, 'text');


			jQuery.get("./services/getFriends.php", {uid:userId}, function(data){
				// get already accepted (nonpending) friends
				var xml = data,
				xmlDoc = $.parseXML( xml ),
				$xml = $( xmlDoc ),
				$person = $xml.find( "response person" ).each(
					function(){
						var friendImage;
						var fname = $(this).find("fname").text(),
						lname = $(this).find("lname").text(),
						uid = $(this).find("uid").text(),
						usergid = $(this).find("googleid").text(),
						friendImage = $(this).find("photourl").text(),
						friendLat = $(this).find("latitude").text(),
						friendLong = $(this).find("longitude").text(),
						friendTime = $(this).find("time").text(),
						plusUrl = "http://plus.google.com/" + usergid,
						coordinate = new google.maps.LatLng(friendLat,friendLong),
						location = getLocation(coordinate);
						if (gid != usergid) {
							$('#friends-list-item-container').append('<div class="list-item" onclick=showFriend("' + friendLat + '","' + friendLong + '","' + friendImage + '")><div class="profile-image"><a href="' + plusUrl + '" target="_blank"><img src="' + friendImage + '"></a></div><div class="list-item-text"><span class="name">'+ fname + " " + lname + '</span><span class="ui-icon ui-icon-flag"></span>' + "<span class='location'>" + location + "</span>" + '</span><span class="ui-icon ui-icon-clock"></span><span class="check-in-date">' + friendTime + '</span></div></div>');
						}
					}
				);	
			}, 'text');

 
		
			jQuery.get("./services/users.php", {page:'1'}, function(data){
			
				var xml = data,
				i = 1,
				xmlDoc = $.parseXML( xml ),
				$xml = $( xmlDoc ),
				$person = $xml.find( "response person" ).each(
					function(){

						var friendImage;
						var fname = $(this).find("fname").text(),
						lname = $(this).find("lname").text(),
						uid = $(this).find("uid").text(),
						usergid = $(this).find("googleid").text(),
						friendImage = $(this).find("photourl").text(),
						plusUrl = "http://plus.google.com/" + usergid;
						if (gid != usergid) {
							$('#users-list-item-container').append('<div class="list-item"><div class="profile-image"><a href="' + plusUrl + '" target="_blank"><img src="' + friendImage + '"></a></div><div class="list-item-text"><span class="name">'+ fname + " " + lname + "</span></div><div class='right-button-icon'><button class='icon-button-" + i + "'/></button></div></div>"); 
							$(".icon-button-"+i).button({ icons: { primary: "ui-icon-circle-plus" }, text: false }).click(function(){sendRequest(userId,uid);});
						}
						i++;
					}
				);		
			}, 'text');

			;}); 
		},'text');

	}
})();



</script>

</head> 
<body onLoad="starter();">     

    <div id="header">
        <a id="norse-square-logo" href="/"><img src="NorseSquareLogo.png" alt="NorseSquare Logo" /></a>
        <div id="login-button-container"><button id="login-button" onClick="loginFunction();">Login</button></div>
    </div><!--header-->   

    <div id="main-page-container">        	
        <div id="lower-page-container">
       
            <a id="janrainLink" class="janrainEngage" href="#"></a>
            <div id="map"></div> 
        
            <div id="toggle-button">
            	<button id="toggle-button-text">&gt;<br>&gt;</button>
            </div><!-- toggle-button -->
            
            <div id="primary-content-container">
                <div id="tabs">
                    <div id="personal-status"></div><!--personal-status -->                    
                    <ul>
                        <li><a href="#friends">Friends</a></li>
                        <li><a href="#users">Users</a></li>
                    </ul>
                    <div id="friends" class="calculated-height">
                    	<div id="show-all-button"></div>
                        <div id="friends-list-item-container" class="list-item-container friends-calculated-height"></div>
                    </div><!-- friends -->  
                    <div id="users" class="calculated-height">
                    	<div id="users-list-item-container" class="list-item-container users-calculated-height"></div>
                    </div><!-- users -->
                 </div><!--jQueryTabs-->
                 
       		</div><!-- primary-content-container -->
    	</div><!-- lower-page-container --> 
    </div><!--mainDiv-->
    <div id="footer">
    	Copyright &copy; NorseSquare<br/>
		Designed by Luther College Seniors
    </div>
</body> 

   <script type="text/javascript" src="jquery-ui.js"></script>
   <script type="text/javascript" src="mapStyles.js"> </script>
   <script type="text/javascript" src="ContextMenu.js"> </script>
   <script type="text/javascript" src="maps.js"></script>
   <script type="text/javascript" src="ui.js"></script>

</html>

<?php 
?>

