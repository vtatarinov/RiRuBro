<?php
include_once "db.php";

$area_min = (isset($_POST['area_min']))?(int)$_POST['area_min']:'';
$area_max = (isset($_POST['area_max']))?(int)$_POST['area_max']:'';
$rate_min = (isset($_POST['rate_min']))?(int)$_POST['rate_min']:'';
$rate_max = (isset($_POST['rate_max']))?(int)$_POST['rate_max']:'';

$result = $connect->query("SELECT *  FROM `objects`");
//return $result->fetchAll();
print_r( $result->fetchAll());