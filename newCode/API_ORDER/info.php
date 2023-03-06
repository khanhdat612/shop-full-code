<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
$UserName = $data->Uname;
$UserPhone = $data->Uphone;
$UserAddress = $data->Uaddress;
$UserNumber = $data->Unumber;
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "order_infouser_admin");

if ($UserName && $UserPhone && $UserAddress && $UserNumber) {
    $sql = "insert into info ( name, phone, address, number ) values ('$UserName','$UserPhone', '$UserAddress', '$UserNumber')";
}

$result = mysqli_query($con, $sql);

if ($result) {
    $response['data'] = array('status' => 'success');
} else {
    $response['data'] = array('status' => 'error');
    echo json_encode($response);
}
