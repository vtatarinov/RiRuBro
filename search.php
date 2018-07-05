<?php
include_once "db.php";

$area_min = (int)$_POST['area_min'];
$area_max = (int)$_POST['area_max'];
$rate_min = (int)$_POST['rate_min'];
$rate_max = (int)$_POST['rate_max'];

$result_blocks = $connect->query("SELECT * FROM blocks INNER JOIN objects ON blocks.object_id = objects.id WHERE area >= $area_min AND area <= $area_max AND rate_year >= $rate_min AND rate_year <= $rate_max");
while ($data_blocks = $result_blocks->fetch()) {
    $blocks[] = $data_blocks;
}

$result_objects = $connect->query("SELECT * FROM objects LIMIT 5");
while ($data_objects = $result_objects->fetch()) {
    $objects[] = $data_objects;
}
/* echo '<pre>';
print_r ($blocks);
echo '</pre>'; */
//print_r ($objects);
echo '<div class="item">
<div class="item-img">
    <img src="'.$blocks[0][photopath].'" alt="'.$blocks[0][photoalt].'">
</div>
<div class="item-info">
    <a href="'.$blocks[0][url].'" class="item-title">'.$blocks[0][name].'<i class="far fa-building"></i></a>
    <p class="item-address">'.$blocks[0][address].'</p>';
foreach ($blocks as $block) {

    //foreach ($blocks as $block) {
        echo '<div class="item-block">
        <p><b>Аренда офиса</b>&ensp;&bull;&ensp;<span>'.$block[floor].' этаж</span>&ensp;&bull;&ensp;<span>Готово к въезду</span>&ensp;&bull;&ensp;<span>Смешанная планировка</span></p>
        <div class="item-area"><a href="#">'.$block[area].' м&sup2;</a></div>
        <div class="item-rate-year">'.$block[rate_year].' <span>руб./м&sup2; в год</span></div>
        <div class="item-rate-month">'.$block[rate_month].' <span>руб./мес</span></div>
    </div>';
    //}

}
echo '</div>
</div>';
