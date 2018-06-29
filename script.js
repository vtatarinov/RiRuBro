$(function() {
    $("#area-slider-range").slider({
        range: true,
        min: 5,
        max: 64000,
        values: [5, 64000],
        slide: function(event, ui) {
        $("#area-min").val(ui.values[0]);
        $("#area-max").val(ui.values[1]);
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
});