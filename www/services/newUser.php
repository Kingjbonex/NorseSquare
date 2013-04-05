<?php
require_once('../config.php');
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$gid = $_POST['gid'];

$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}
mysql_select_db(DB_NAME, $connection);
$Query = 'INSERT INTO users (uid,fname,lname,username,googleid) SELECT (MAX(uid)+1),"' 
	. $fname . '","' . $lname . '","' . $email . '","' . $gid . '" FROM users WHERE not exists (SELECT
	 * from users WHERE users.username = "' . $email . '")';

$result = mysql_query($Query,$connection);

?>
