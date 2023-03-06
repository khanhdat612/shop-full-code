<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));


$inputName = $data->valueName;
$inputPrice = $data->valuePrice;
$inputPriceSale = $data->valuePriceSale;
$inputQuantity = $data->valueQuantity;
// $inputAccessory = $data->valuePriceAccessory;


$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "accessory1_add_product");

if ($inputName && $inputPrice && $inputPriceSale && $inputQuantity) {
    $sql = "insert into add_product_accessory ( name, price, pricesale, quantity) values ('$inputName', '$inputPrice', '$inputPriceSale', '$inputQuantity')";
}

$result = mysqli_query($con, $sql);

if ($result) {
    $response['data'] = array('status' => 'success');
} else {
    $response['data'] = array('status' => 'error');
    echo json_encode($response);
}
