<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$con = mysqli_connect("localhost", "root", "");

mysqli_select_db($con, "android1_add_product");

$sql = "delete from android1_add_productt where id = '" . $data->id . "'";
$result = mysqli_query($con, $sql);
