$(function() {
    //Загрузка из LocalStorage параметров поиска

    searchLoad = JSON.parse(localStorage.getItem("search"));
    if (searchLoad == null) {
        areaMin = 5, areaMax = 64000, rateMin = 900, rateMax = 177777;
    }
    else {
        areaMin = searchLoad.areaMin, areaMax = searchLoad.areaMax, rateMin = searchLoad.rateMin, rateMax = searchLoad.rateMax;
    }

  //Фильтр поиска по параметрам с ползунком

    $("#area-slider-range").slider({
        range: true,
        min: 5,
        max: 64000,
        values: [areaMin, areaMax],
        slide: function(event, ui) {
        $("#area-min").val(ui.values[0]);
        $("#area-max").val(ui.values[1]);
        area_min = ui.values[0];
        area_max = ui.values[1];
      }
    });
    $("#area-min").val($("#area-slider-range").slider("values", 0));
    $("#area-max").val($("#area-slider-range").slider("values", 1));

    area_min = $("#area-slider-range").slider("values", 0);
    area_max = $("#area-slider-range").slider("values", 1);

    $("input#area-min").change(function() {
        value0 = $("input#area-min").val();
        value1 = $("input#area-max").val();
        if (value0 < 5) {
            value0 = 5;
            $("input#area-min").val(5)
        }
        if (parseInt(value0) > parseInt(value1)) {
            value0 = value1;
            $("input#area-min").val(value0);
        }
        $("#area-slider-range").slider("values",0,value0);
        area_min = $("input#area-min").val();
        area_max = $("input#area-max").val();
    });

    $("input#area-max").change(function() {
        value0 = $("input#area-min").val();
        value1 = $("input#area-max").val();
        if (value1 > 64000) {
            value1 = 64000;
            $("input#area-max").val(64000)
        }
        if (parseInt(value0) > parseInt(value1)) {
            value1 = value0;
            $("input#area-max").val(value1);
        }
        $("#area-slider-range").slider("values",1,value1);
        area_min = $("input#area-min").val();
        area_max = $("input#area-max").val();
    });

    $("#rate-slider-range").slider({
        range: true,
        min: 900,
        max: 177777,
        values: [rateMin, rateMax],
        slide: function(event, ui) {
        $("#rate-min").val(ui.values[0]);
        $("#rate-max").val(ui.values[1]);
        rate_min = ui.values[0];
        rate_max = ui.values[1];
      }
    });
    $("#rate-min").val($("#rate-slider-range").slider("values", 0));
    $("#rate-max").val($("#rate-slider-range").slider("values", 1));
    
    rate_min = $("#rate-slider-range").slider("values", 0);
    rate_max = $("#rate-slider-range").slider("values", 1);

    $("input#rate-min").change(function() {
        value0 = $("input#rate-min").val();
        value1 = $("input#rate-max").val();
        if (value0 < 900) {
            value0 = 900;
            $("input#rate-min").val(900)
        }
        if (parseInt(value0) > parseInt(value1)) {
            value0 = value1;
            $("input#rate-min").val(value0);
        }
        $("#rate-slider-range").slider("values",0,value0);
        rate_min = $("input#rate-min").val();
        rate_max = $("input#rate-max").val();	
    });

    $("input#rate-max").change(function() {
        value0 = $("input#rate-min").val();
        value1 = $("input#rate-max").val();
        if (value1 > 177777) {
            value1 = 177777;
            $("input#rate-max").val(177777)
        }
        if (parseInt(value0) > parseInt(value1)) {
            value1 = value0;
            $("input#rate-max").val(value1);
        }
        $("#rate-slider-range").slider("values",1,value1);
        rate_min = $("input#rate-min").val();
        rate_max = $("input#rate-max").val();
    });

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
                $("#catalog").html(answer);
                searchObj = {
                    areaMin: area_min,
                    areaMax: area_max,
                    rateMin: rate_min,
                    rateMax: rate_max
                };
                searchString = JSON.stringify(searchObj);
                localStorage.setItem("search", searchString);
            },
            error: function() {
                alert ("Что-то пошло не так...");
            }
        })
    });

    //Навешивание обработчиков на кнопки дополнительной выдачи блоков

    /* document.querySelectorAll(".item-showmore").forEach(function(element) {
        element.addEventListener("click", function() {
            $(".item-showmore").parent().css("margin-bottom", "60px");
            $(".item-showmore").remove(); 
            console.log("Done!");
        });
    }); */
});

//Функция дополнительной выдачи блоков

function showMore() {
    element = event.target;
    $.ajax({
        type: 'POST',
        url: '../search.php',
        data:
        {
            area_min: area_min,
            area_max: area_max,
            rate_min: rate_min,
            rate_max: rate_max,
            offset: 3
        },
        success: function(answer) {
            $(element).parent(".item-info").append(answer);
            $(".item-showmore").parent().css("margin-bottom", "60px");
            $(".item-showmore").remove();
        },
        error: function() {
            alert ("Что-то пошло не так...");
        }
    })
}