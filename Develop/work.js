$(document).ready(function () {
  //get time and daate format from moment.js

  //current date
  var currentDay = moment().format("MMMM Do YYYY, HH:mm");
  $("#currentDay").text(currentDay);

  //when user clicks on save btn
  $(document).ready(function () {
    $(".saveBtn").on("click", function (event) {
      event.preventDefault();
      var text = $(this).siblings(".Description").val();
      var time = $(this).parent().attr("id");
      //need to save in local storage
      localStorage.setItem(time, text);
      //localStorage.getItem(".Description");
    });
    var loadtasks = function () {
      var savedTasks = localStorage.getItem("text");

      if (!savedTasks) {
        return false;
      }
      savedTasks = JSON.parse(savedTasks);
    };
    loadtasks();

    //set event handler for all save buttons

    //need button function to clear local storage and clear contents

    //function to take each hour and compare to the actual time

    //get items from local storage and set it in proper places
    $("#hour-9.Description").val(localStorage.getItem("9"));
    $("hour-10.Description").val(localStorage.getItem("10"));
    $("hour-11.Description").val(localStorage.getItem("11"));
    $("hour-12.Description").val(localStorage.getItem("12"));
    $("hour-1.Description").val(localStorage.getItem("1"));
    $("hour-2.Description").val(localStorage.getItem("2"));
    $("hour-3.Description").val(localStorage.getItem("3"));
    $("hour-4.Description").val(localStorage.getItem("4"));
    $("hour-5.Description").val(localStorage.getItem("5"));
  });
  //sets date in header and current time
});
