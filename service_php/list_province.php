<?php

include('../../libs/config_protraveller.php');




$sql = "SELECT * FROM province";
$result = pg_query($db,$sql);
$coursesArray = array();

while ($row = pg_fetch_assoc($result)) {
$coursesArray[] = $row;
}
echo json_encode($coursesArray);
?>