<?php
require_once('../config.php');

$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}
mysql_select_db(DB_NAME, $connection);
$Query = 'SELECT a.fname,a.lname,a.username,a.googleid,b.time,b.longitude,b.latitude FROM users AS a INNER JOIN 
(SELECT MAX(activity.time) time,activity.uid, activity.latitude, activity.longitude 
FROM activity GROUP BY activity.uid) AS b ON (b.uid = a.uid)';

$result = mysql_query($Query,$connection);
$gotarray = mysql_fetch_array($result);

header('Content-type:text/xml');
echo '<response>';
while($gotarray){
	echo '<person>';
	foreach($gotarray as $index => $userinfo) {
		if(!is_numeric($index)){
			echo '<',$index, '>';
			echo $userinfo;
			echo '</',$index,'>';
		}
	}
	echo '</person>';
	$gotarray = mysql_fetch_array($result);
}
echo '</response>';

?>
