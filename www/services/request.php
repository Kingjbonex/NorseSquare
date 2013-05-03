<?php
require_once('../config.php');
$type  = $_GET['type'];

$connection = mysql_connect(DB_HOST,DB_USER,DB_PASSWORD);
if (!$connection)
{
	echo "Could not connect: " . mysql_error();
}else{
mysql_select_db(DB_NAME, $connection);
}
if ( $type == "getpending"){
$uid = $_GET['uid'];
$Query = 'SELECT users.uid,fname,lname,googleid,photourl,a.pending FROM users INNER JOIN frequests AS a ON users.uid=a.uid WHERE a.fuid='.$uid.' AND (a.pending = 2 OR a.pending=1)';
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

} else if ( $type == "accept"){
$uid = $_GET['uid'];
$fuid = $_GET['fuid'];
$Query = 'UPDATE frequests SET pending=0 WHERE (fuid='.$fuid.' AND uid='.$uid.' AND pending=1) OR (fuid='.$uid.' AND uid='.$fuid.' AND pending = 2)';
echo $Query;
$result = mysql_query($Query,$connection);

}else if ( $type == "send"){
$uid = $_GET['uid'];
$fuid = $_GET['fuid'];
$Query = 'INSERT INTO frequests (uid,fuid,pending) SELECT '.$fuid.','.$uid.',1 FROM DUAL WHERE not exists (SELECT * from frequests WHERE (fuid='
	.$uid.' AND uid='.$fuid.'))';
echo $Query;
$result = mysql_query($Query,$connection);
$Query = 'INSERT INTO frequests (uid,fuid,pending) SELECT '.$uid.','.$fuid.',2 FROM DUAL WHERE not exists (SELECT * from frequests WHERE (uid='
	.$uid.' AND fuid='.$fuid.'))';
echo $Query;
$result = mysql_query($Query,$connection);

}


}
?>