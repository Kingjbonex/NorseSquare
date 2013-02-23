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
    echo $auth_info['profile']['email'];
  }
}

?>






<html>
<head>

<title>Janrain Engage example</title>

</head>
<body>
<!-- content -->
<pre>
<?php echo $debug_out; ?>
</pre>
<!-- javascript -->
</body>
</html>