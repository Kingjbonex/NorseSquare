<?php
  $rpx_api_key = "afb1996de68eb3aa1764c1bca05843a2017c7412";
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
      echo $email;
    }
  }
?>

<script type="text/javascript">
  var email = "<?php Print($email); ?>";
</script>




<html> 
<head> 
	<link rel="stylesheet" type="text/css" href="stylesheet.css" />
   <meta http-equiv="content-type" content="text/html; charset=UTF-8"/> 
   <title>NorseSquare</title> 
   <script src="http://www.parsecdn.com/js/parse-1.1.14.min.js"></script>



<script type="text/javascript">
(function() {
    if (typeof window.janrain !== 'object') window.janrain = {};
    if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};
    
<<<<<<< HEAD
    janrain.settings.tokenUrl = 'http://norsesquare.bantatechsolutions.com/maps/maps.php';
=======
    //janrain.settings.tokenUrl = 'http://norsesquare.bantatechsolutions.com/maps/maps.php';
    janrain.settings.tokenUrl = 'http://norsesquare.internal.luther.edu/maps/maps.php';//switch to internal server
>>>>>>> 184ae4515bb0bfda4cef950d4afb793eec6006a7

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
})();
</script>



</head> 
<body onLoad="starter();">     
	<div id="mainDiv">
  <a id="janrainLink" class="janrainEngage" href="#"></a>
	<div id="map" style="width: 100%; height: 600px; float:right;"></div> 
  
  </div>   
</body> 

   <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
   <script type="text/javascript" src="markers.js"> </script>
   <script type="text/javascript" src="polygons.js"> </script>
   <script type="text/javascript" src="mapStyles.js"> </script>
   <script type="text/javascript" src="jquery.js"></script>
   <script type="text/javascript" src="maps.js"></script>



</html>

<?php 
?>

