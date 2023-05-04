<?php

include('databaseConnection.php');

$status = $_POST['status'];
$deviceCode = $_POST['deviceCode'];

$query = "UPDATE devices SET deviceStatus = '$status' WHERE deviceCode = '$deviceCode'";
$result = mysqli_query($conn,$query);