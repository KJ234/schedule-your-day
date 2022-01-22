//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

var time = moment();
$("#currentDay").text(time.format("dddd, MMMM Do YYYY, H:mm a"));

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function changeColour() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    var newHour = parseInt($(this).attr("id").split("hour")[1]);

    if (newHour < currentHour) {
      $(this).addClass("past");
    } else if (newHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

//WHEN I refresh the page
//THEN the saved events persist

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

changeColour();
