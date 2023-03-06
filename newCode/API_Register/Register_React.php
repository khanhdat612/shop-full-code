<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
$inputUser = $data->Ausername;
$inputTelephone = $data->Atelephone;
$inputPass = $data->Apassword;
$inputAddress = $data->Aaddress;
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "react_register");

if ($inputUser && $inputTelephone && $inputPass && $inputAddress) {
    $sql = "insert into login ( username, telephone, password, address ) values ('$inputUser','$inputTelephone', '$inputPass', '$inputAddress')";
}
$result = mysqli_query($con, $sql);

if ($result) {
    $response['data'] = array('status' => 'success');
} else {
    $response['data'] = array('status' => 'error');
    echo json_encode($response);
}
