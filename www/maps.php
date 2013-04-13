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
	    }
	  }
  }
?>

<script type="text/javascript">
  var email = "<?php   if(isset($_POST['token'])){Print($email);} ?>";
  var fname = "<?php   if(isset($_POST['token'])){Print($fname);} ?>";
  var lname = "<?php   if(isset($_POST['token'])){Print($lname);} ?>";
  var gid = "<?php   if(isset($_POST['token'])){Print($gid);} ?>";
</script>

<html> 
<head> 
	<link rel="stylesheet" type="text/css" href="stylesheet.css" />
	<link rel="stylesheet" type="text/css" href="css/no-theme/jquery-ui-1.10.2.custom.css" />
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

    //Calling function to create new user
    if(email != "") {
		var uid = jQuery.get("./services/login.php", {fname:fname, lname:lname, email:email, gid:gid});
		jQuery.get("./services/users.php", {page:'1'}, function(data){
			
			var friendsData = "";
			var xml = data,
			xmlDoc = $.parseXML( xml ),
			$xml = $( xmlDoc ),
			$person = $xml.find( "response person" ).each(
				function(){
					var friendImage;
					var fname = $(this).find("fname").text(),
					lname = $(this).find("lname").text(),
					uid = $(this).find("uid").text(),
					gid = $(this).find("googleid").text();
					console.log(gid);
					jQuery.ajax({
						type: "GET",
						url:"./services/getPhoto.php",
						data: {UID:gid},
						async: false, 
						success: function(data){
							if(!data){friendImage = './imageThumb.gif'}
							else {friendImage = data};
						}
					});
					
					friendsData = friendsData + "<img src='" + friendImage + "' style='width:50px;height:50px;'>" + " " + fname + " " + lname + "</br>";

				}
			);
			document.getElementById("friends").innerHTML=friendsData;
					
		}, 'text');				

	}

})();
</script>

</head> 
<body onLoad="starter();">        
    <div id="mainPageContainer">
        
        <div id="header">
            <a id="norseSquareLogo" href="/"><img src="NorseSquareLogo.png" alt="NorseSquare Logo" /></a>
        </div><!--header-->
        	
            <div id="personalStatus">
            	<!--picture, fname, lname, position-->
            </div>
            
        	<div class="toggleBut">
            	<button>>></button>
            </div>
            
        	<div id="tabs">
            	<ul>
                	<li><a href="#friends">friends</a></li>
                    <li><a href="#plans">plans</a></li>
                    <li><a href="#settings">settings</a></li>
                </ul>
                <div id="friends">
                
                
                
                
                
                
                </div>
                <div id="plans">
                    <p>Where our plans section will be placed.</p>
                </div>
                <div id="settings">
                    <p>Where our settings section will be placed.</p>
                </div>
             </div><!--jQueryTabs-->
     
            
        <a id="janrainLink" class="janrainEngage" href="#"></a>
        <div id="map"></div> 
     
    </div><!--mainDiv-->
</body> 

   <script type="text/javascript" src="jquery-ui.js"></script>
   <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
   <script type="text/javascript" src="polygons.js"> </script>
   <script type="text/javascript" src="mapStyles.js"> </script>
   <script type="text/javascript" src="maps.js"></script>
   <script type="text/javascript" src="ui.js"></script>
   <script type="text/javascript">
   		google.maps.event.trigger(map, 'resize');
		map.setZoom( map.getZoom() );
	</script>
</html>

<?php 
?>

