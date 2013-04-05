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
	      print_r($auth_info);
	      $email = $auth_info['profile']['email'];
	      $fname = $auth_info['profile']['name']['givenName'];
	      $lname = $auth_info['profile']['name']['familyName'];
	      $gid = $auth_info['profile']['googleUserId'];
	      echo "Email: " . $email . ", First Name: " . $fname . ", Last Name: " . $lname . ", Google ID: " . $gid;
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
        
        janrain.settings.tokenUrl = 'http://norsesquare.internal.luther.edu/maps.php';//switch to internal server
    

    janrain.settings.tokenUrl = 'http://norsesquare.internal.luther.edu/maps.php';//switch to internal server

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
    if(email != "") {var uid = jQuery.get("./services/login.php", {fname:fname, lname:lname, email:email, gid:gid});}
})();
</script>

</head> 
<body onLoad="starter();">        
    <div id="mainPageContainer">
        
        <div id="header">
            <a id="norseSquareLogo" href="/"><img src="NorseSquareLogo.png" alt="NorseSquare Logo" /></a>
            <button>toggle</button>
        </div><!--header-->
        
        <div id="navBar">
        	<div id="tabs">
            	<ul>
                	<li><a href="#friends"><img src="FriendsButton.png" alt="friend button" /></a></li>
                    <li><a href="#plans"><img src="PlansButton.png" alt="plans button" /></a></li>
                    <li><a href="#settings"><img src="SettingsButton.png" alt="settings button" /></a></li>
                </ul>
                <div id="friends">
                    <p>Where our friends section will be placed.</p>
                </div>
                <div id="plans">
                    <p>Where our plans section will be placed.</p>
                </div>
                <div id="settings">
                    <p>Where our settings section will be placed.</p>
                </div>
             </div><!--jQueryTabs-->      
		</div><!--navBar-->
            
        <a id="janrainLink" class="janrainEngage" href="#"></a>
        <div id="map"></div> 
     
    </div><!--mainDiv-->
</body> 

   <script type="text/javascript" src="jquery-ui.js"></script>
   <script type="text/javascript" src="ui.js"></script>
   <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
   <script type="text/javascript" src="markers.js"> </script>
   <script type="text/javascript" src="polygons.js"> </script>
   <script type="text/javascript" src="mapStyles.js"> </script>
   <script type="text/javascript" src="maps.js"></script>
</html>

<?php 
?>

