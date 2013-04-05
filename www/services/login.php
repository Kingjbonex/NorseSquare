<?php
require_once('../config.php');
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];

$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}else{
mysql_select_db(DB_NAME, $connection);
$Query = 'INSERT INTO users (uid,fname,lname,username) SELECT (MAX(uid)+1),"' 
	. $fname . '","' . $lname . '","' . $email . '" FROM DUAL WHERE not exists (SELECT
	 * from users WHERE users.username = "' . $email . '")';
echo $Query;
$result = mysql_query($Query,$connection);

$Query = 'SELECT uid FROM users WHERE users.username="'.$email.'"';
$result = mysql_query($Query,$connection);
echo mysql_result($result, 0);
}
?>
