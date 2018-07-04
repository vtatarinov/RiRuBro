<?php
include_once "config.php";

try {
    $connect = new PDO(DB_SERVER.':host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASS);
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}