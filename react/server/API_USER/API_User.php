<?php
include_once("core.php");
$connect = mysqli_connect("localhost", "root", "", "info_user");
$sql = "SELECT * FROM info ORDER BY ID DESC";
$result = mysqli_query($connect, $sql);
$json_array = array();
while ($row = mysqli_fetch_assoc($result)) {
    $json_array[] = $row;
}
echo json_encode($json_array);
