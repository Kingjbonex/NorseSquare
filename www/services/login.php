<?php
require_once('../config.php');
$fname = $_GET['fname'];
$lname = $_GET['lname'];
$email = $_GET['email'];
$gid = $_GET['gid'];
$time = date("Y-m-d H:i:s", time());


$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}
mysql_select_db(DB_NAME, $connection);

$result = get_headers("https://www.google.com/s2/photos/profile/" . $gid, 1);
$photourl = $result['Location'];
if ($photourl == "") {$photourl = "imageThumb.gif";}

//select from users where username = email
//if empty insert user
//else update with name and photo
//select any info we want and pass it back

function humanTiming ($ftime)
{

    $ftime = time() - strtotime($ftime); // to get the time since that moment

    $tokens = array (
        31536000 => 'year',
        2592000 => 'month',
        604800 => 'week',
        86400 => 'day',
        3600 => 'hour',
        60 => 'minute',
        1 => 'second'
    );

    foreach ($tokens as $unit => $text) {
        if ($ftime < $unit) continue;
        $numberOfUnits = floor($ftime / $unit);
        return $numberOfUnits.' '.$text.(($numberOfUnits>1)?'s':'');
    }

}

$Query = 'INSERT INTO users (uid,fname,lname,username,googleid,logintime) SELECT (MAX(uid)+1),"' 
	. $fname . '","' . $lname . '","' . $email . '","' . $gid . '","' . $time . '" FROM users WHERE not exists (SELECT
	 * from users WHERE users.username = "' . $email . '")';

$result = mysql_query($Query,$connection);

$Query = 'UPDATE users SET photourl="' . $photourl . '" WHERE users.username = "' . $email . '"';
$result = mysql_query($Query,$connection);

$Query = 'SELECT uid,fname,lname,photourl,latitude,longitude,time FROM users WHERE users.username="'.$email.'"';
$result = mysql_query($Query,$connection);

$gotarray = mysql_fetch_array($result);
header('Content-type:text/xml');
echo '<response>';
while($gotarray){
	echo '<person>';
	foreach($gotarray as $index => $userinfo) {
		if(!is_numeric($index)){
			if ($index == "time") {$userinfo = humanTiming ($userinfo);}
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
