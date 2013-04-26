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

$result = get_headers("https://www.google.com/s2/photos/profile/" . $gid, 1);
$photourl = $result['Location'];

//select from users where username = email
//if empty insert user
//else update with name and photo
//select any info we want and pass it back

$Query = 'INSERT INTO users (uid,fname,lname,username,googleid) SELECT (MAX(uid)+1),"' 
	. $fname . '","' . $lname . '","' . $email . '","' . $gid . '" FROM users WHERE not exists (SELECT
	 * from users WHERE users.username = "' . $email . '")';

$result = mysql_query($Query,$connection);

$Query = 'UPDATE users SET photourl="' . $photourl . '" WHERE users.username = "' . $email . '")';
$result = mysql_query($Query,$connection);

$Query = 'SELECT uid,fname,lname,photourl,latitude,longitude FROM users WHERE users.username="'.$email.'"';
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
