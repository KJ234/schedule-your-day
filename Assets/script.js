var time = moment();
$("#currentDay").text(time.format("dddd, MMMM Do YYYY, H:mm a"));

function changeColour() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    var newHour = parseInt($(this).attr("id").split("hour")[1]);
  });
}
