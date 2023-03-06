<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));


$inputUser = $data->Ausername;
$inputPass = $data->Apassword;



$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "react_login");

if ($inputUser && $inputPass) {
    $sql = "insert into register ( usernameABC, password ) values ('$inputUser', '$inputPass')";
}

$result = mysqli_query($con, $sql);

if ($result) {
    $response['data'] = array('status' => 'success');
} else {
    $response['data'] = array('status' => 'error');
    echo json_encode($response);
}
