<?php
include_once "config.php";

try {
    $connect = new PDO(DB_SERVER.':host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASS);
    $connect->exec('SET NAMES UTF8');
	$connect->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}