<?php

include('databaseConnection.php');

$deviceCode = $_POST['deviceCode'];

$query = "SELECT * FROM devices WHERE deviceCode = $deviceCode";
$result = mysqli_query($conn,$query);
$resultCheck = mysqli_num_rows($result);
$data = array();

if($resultCheck > 0){
    while($row = mysqli_fetch_array($result)){
        $data[] = $row;
    }
}
json_encode($data);


echo $data[0]['deviceStatus'];