<?php
require_once('../config.php');
$lat = $_POST['lat'];
$long = $_POST['long'];
$email = $_POST['email'];
$time = date("Y-m-d H:i:s", time());

$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}

mysql_select_db(DB_NAME, $connection);
$Query = 'INSERT INTO activity (activity_id,uid,latitude,longitude,time,type) SELECT ((MAX(activity.activity_id))+1),(SELECT uid FROM users WHERE users.username = "' . $email . '" LIMIT 1),' . $lat . ',' . $long . ',"'. $time . '" ,"check" FROM activity';

$result = mysql_query($Query,$connection);

?>
