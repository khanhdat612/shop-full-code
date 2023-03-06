<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
// $inputName = $data->valueName;
// $inputPrice = $data->valuePrice;
// $inputPriceSale = $data->valuePriceSale;
// $inputQuantity = $data->valueQuantity;

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "ios1_add_product");

$sql = "delete from add_product_ios where id = '" . $data->id . "'";
$result = mysqli_query($con, $sql);
