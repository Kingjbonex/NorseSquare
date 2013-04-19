<?php
require_once('../config.php');
$fname = $_GET['fname'];
$lname = $_GET['lname'];
$email = $_GET['email'];
$gid = $_GET['gid'];

$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}
mysql_select_db(DB_NAME, $connection);

$photourl = get_headers("https://www.google.com/s2/photos/profile/" . $gid, 1);

$Query = 'INSERT INTO users (uid,fname,lname,username,googleid,photourl) SELECT (MAX(uid)+1),"' 
	. $fname . '","' . $lname . '","' . $email . '","' . $gid . '","' . $photourl '" FROM users WHERE not exists (SELECT
	 * from users WHERE users.username = "' . $email . '")';

$result = mysql_query($Query,$connection);

$Query = 'SELECT uid FROM users WHERE users.username="'.$email.'"';
$result = mysql_query($Query,$connection);
echo mysql_result($result, 0);

?>
