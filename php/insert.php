<?php
header("Access-Control-Allow-Origin: *");

header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-
origin, access-control-allow-methods, access-control-allow-headers');


$hostname_db = "119.59.125.189";
$database_db = "isnre";
$username_db = "postgres";
$password_db = "##isnre@postgis##";

$link = pg_connect("host=$hostname_db user=$username_db password=$password_db dbname=$database_db") or die("Can't Connect Server");

pg_query("SET client_encoding = 'utf-8'"); 



if ($_SERVER['REQUEST_METHOD'] == 'POST') {

// get post body content
$content = file_get_contents('php://input');
// parse JSON
$user = json_decode($content, true);

$name_user = $user['name_user'];
$lname_user = $user['lname_user'];
$tal_user = $user['tal_user'];
$prov_user = $user['prov_user'];
$amp_user = $user['amp_user'];
$tam_user = $user['tam_user'];
$email_user = $user['email_user'];
$pass_user = $user['pass_user'];
$level_user = $user['level_user'];

//check duplicate $email_user
$sql2 = "SELECT * FROM user_profile WHERE email_user = '$email_user' ";
$result2 = pg_query($link, $sql2);
$rowcount = pg_num_rows($result2);
if ($rowcount == 1) {
echo json_encode(['status' => 'error','message' => 'ไมสามารถลงทะเบียนได อีเมลนี้มี

ผูใชแลว']);

exit;
}

//insert data
$sql = "INSERT INTO 'user_profile' ('name_user', 'lname_user', 'tal_user' , 'prov_user', 'amp_user', 'tam_user', 'email_user', 'pass_user' ,'level_user','status_user' ) VALUES ('$name_user', '$lname_user', '$tal_user', '$prov_user', '$amp_user', '$tam_user', '$email_user', '$pass_user', '$level_user', 'other_user');";

$result = pg_query($link, $sql);

if ($result) {
echo json_encode(['status' => 'ok','message' => 'บันทึกขอมูลเรียบรอยนะ']);
} else {
echo json_encode(['status' => 'error','message' => 'เกิดขอผิดพลาดในการบันทึกขอมูล']);
}
}


pg_close($link);


?>