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
  var myPhotourl;
</script>

<html> 
<head> 
	<link rel="stylesheet" type="text/css" href="stylesheet.css" />
	<link rel="stylesheet" type="text/css" href="css/custom-theme/jquery-ui-1.10.2.custom.css" />
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
					photo = $(this).find("photourl").text();
					myPhotourl = photo;
					$('#personal-status').append("<div class='personal-image'><img src='" + photo + "'/></div><div class='personal-text'> <span class='name'>" + fname + " " + lname + "</span><span class='ui-icon ui-icon-flag'></span><span class='location'>Luther College</span><span class='ui-icon ui-icon-clock'></span><span class='check-in-date'>" + time + "</span></div><div class='check-in'><button id='check-in-button'>Check-in</button></div>");
					$("#check-in-button").button({
						icons: { primary: "ui-icon-circle-check" },
						text: true
					}).click(function(){checkIn();});
				;});
			},'text');

		
		jQuery.get("./services/users.php", {page:'1'}, function(data){
			
			var xml = data,
			xmlDoc = $.parseXML( xml ),
			$xml = $( xmlDoc ),
			$person = $xml.find( "response person" ).each(
				function(){
					var friendImage;
					var fname = $(this).find("fname").text(),
					lname = $(this).find("lname").text(),
					uid = $(this).find("uid").text(),
					usergid = $(this).find("googleid").text();
					friendImage = $(this).find("photourl").text(),
					friendLat = $(this).find("latitude").text(),
					friendLong = $(this).find("longitude").text();
					friendTime = $(this).find("time").text();
					if (gid != usergid) {
						$('#friends').append('<div class="list-item" onclick="alert(&quot;'+fname+'&quot;);"><div class="profile-image"><img src="' + friendImage + '"></div><div class="list-item-text"><span class="name">'+ fname + " " + lname + '</span><span class="ui-icon ui-icon-flag"></span>' + "<span class='location'>Luther College</span>" + '</span><span class="ui-icon ui-icon-clock"></span><span class="check-in-date">' + friendTime + '</span></div><div class="right-button-icon"><button class="icon-button"/></button></div></div>'); 
						$(".icon-button").button({ icons: { primary: "ui-icon-circle-plus" }, text: false });
					}
				}
			);

					
		}, 'text');
		
	}

})();
</script>

</head> 
<body onLoad="starter();">     

    <div id="header">
        <a id="norse-square-logo" href="/"><img src="NorseSquareLogo.png" alt="NorseSquare Logo" /></a>
	   <button id="login-button" onclick="loginFunction();">Login</button>
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
                        <li><a href="#plans">Plans</a></li>
                        <li><a href="#settings">Settings</a></li>
                    </ul>
                    <div id="friends" class="calculated-height">
                    
                    </div><!-- friends -->  
                    <div id="plans">
                        <p>Where our plans section will be placed.</p>
                    </div>
                    <div id="settings">
                    		<button id="show-all-friends" onclick="findAll();">Show all friends</button>
                        <p>Where our settings section will be placed.</p>
                    </div>
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
   <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
   <script type="text/javascript" src="polygons.js"> </script>
   <script type="text/javascript" src="mapStyles.js"> </script>
   <script type="text/javascript" src="maps.js"></script>
   <script type="text/javascript" src="ui.js"></script>
</html>

<?php 
?>

