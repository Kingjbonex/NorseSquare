<?php

$UID = $_POST['UID'];

$result = get_headers("https://www.google.com/s2/photos/profile/" . $UID, 1);

echo $result['Location'];
?>
