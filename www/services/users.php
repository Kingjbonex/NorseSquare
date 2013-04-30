<?php
require_once('../config.php');
$page = $_GET['page'];
$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}
mysql_select_db(DB_NAME, $connection);
$start = (intval($page)-1)*30;
$end =  intval($page)*30;
$Query = 'SELECT users.fname,users.lname,users.uid,users.googleid,users.photourl,users.longitude,users.latitude,users.time FROM users LIMIT '.$start.','.$end;
//echo $Query;
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
