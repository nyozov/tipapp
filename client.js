$(document).ready(function () {
  $(".tip-button").click(function () {
    console.log($(this).attr("value"));
    console.log($("#amount").val());
    $("#tip-calculated").text($(this).attr("value") * $("#amount").val());
  });

  $("#people").on("input", function () {
    $("#tip-total").text(
      $(".tip-button").attr("value") * $("#amount").val() * $("#people").val()
    );
  });
});
