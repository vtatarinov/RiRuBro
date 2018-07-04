$(function() {
  //Фильтр поиска по параметрам
    $("#area-slider-range").slider({
        range: true,
        min: 5,
        max: 64000,
        values: [5, 64000],
        slide: function(event, ui) {
        $("#area-min").val(ui.values[0]);
        $("#area-max").val(ui.values[1]);
        area_min = ui.values[0];
        area_max = ui.values[1];
      }
    });
    $("#area-min").val($("#area-slider-range").slider("values", 0));
    $("#area-max").val($("#area-slider-range").slider("values", 1));

    $("#rate-slider-range").slider({
        range: true,
        min: 900,
        max: 177777,
        values: [900, 177777],
        slide: function(event, ui) {
        $("#rate-min").val(ui.values[0]);
        $("#rate-max").val(ui.values[1]);
      }
    });
    $("#rate-min").val($("#rate-slider-range").slider("values", 0));
    $("#rate-max").val($("#rate-slider-range").slider("values", 1));

    area_min = $("#area-slider-range").slider("values", 0);
    area_max = $("#area-slider-range").slider("values", 1);
    rate_min = $("#rate-slider-range").slider("values", 0);
    rate_max = $("#rate-slider-range").slider("values", 1);
  
    //Навешивание обработчика на кнопку поиска

    document.getElementById("search-button").addEventListener("click", function() {
      $.ajax({
        type: 'POST',
        url: '../search.php',
        data:
        {
            area_min: area_min,
            area_max: area_max,
            rate_min: rate_min,
            rate_max: rate_max
        },
        success: function(answer) {
            alert(answer);
        },
        error: function() {
            alert ("Что-то пошло не так...");
        }
    })
    });
});