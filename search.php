<?php
include_once "db.php";

$area_min = (int)$_POST['area_min'];
$area_max = (int)$_POST['area_max'];
$rate_min = (int)$_POST['rate_min'];
$rate_max = (int)$_POST['rate_max'];

$result_objects = $connect->query("SELECT *  FROM objects LIMIT 5");
while ($data_objects = $result_objects->fetch()) {
    $objects[] = $data_objects;
}

$result_blocks = $connect->query("SELECT *  FROM blocks LIMIT 3");
while ($data_blocks = $result_blocks->fetch()) {
    $blocks[] = $data_blocks;
}

foreach ($objects as $object) {

echo '<div class="item">
<div class="item-img">
    <img src="img/morozov.png" alt="morozov">
</div>
<div class="item-info">
    <a href="#" class="item-title">Бизнес-центр &laquo;Морозов&raquo;<i class="far fa-building"></i></a>
    <p class="item-address">Улица Льва Толстого, 16</p>';
    foreach ($blocks as $block) {
        echo '<div class="item-block">
        <p><b>Аренда офиса</b>&ensp;&bull;&ensp;<span>1-3 этаж</span>&ensp;&bull;&ensp;<span>Готово к въезду</span>&ensp;&bull;&ensp;<span>Смешанная планировка</span></p>
        <div class="item-area"><a href="#">1222 м&sup2;</a></div>
        <div class="item-rate-year">45 000 <span>руб./м&sup2; в год</span></div>
        <div class="item-rate-month">4 582 500 <span>руб./мес</span></div>
    </div>';
    }
echo '</div>
</div>';
}