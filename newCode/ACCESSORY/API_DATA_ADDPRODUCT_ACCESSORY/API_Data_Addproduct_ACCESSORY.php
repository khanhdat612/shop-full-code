 <?php
    include_once("core.php");
    $connect = mysqli_connect("localhost", "root", "", "accessory1_add_product");
    $sql = "SELECT * FROM add_product_accessory ORDER BY ID DESC";
    $result = mysqli_query($connect, $sql) or die("Error in Selecting " . mysqli_error($connect));
    $json_array = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $json_array[] = $row;
        foreach ($json_array as $key => $value) {
            $newArrData[$key] =  $json_array[$key];
            // $newArrData[$key]['image'] = base64_encode($json_array[$key]['image']);
        }
    }
    header('Content-type: application/json');
    echo json_encode($newArrData);
