<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$info = json_decode(file_get_contents("php://input"));


$eName = $info->userName;
$ePhone = $info->userPhone;
$eAddress = $info->userAddress;
$eNumber = $info->userNumber;


$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "info_user");

if ($eName && $ePhone && $eAddress && $eNumber) {
    $sql = "insert into info ( name, phone, address, number ) values ('$eName', '$ePhone', '$eAddress', '$eNumber')";
}

$result = mysqli_query($con, $sql);

if ($result) {
    $response['data'] = array('status' => 'success');
} else {
    $response['data'] = array('status' => 'error');
    echo json_encode($response);
}
