$(document).ready(function () {
  //get time and daate format from moment.js
  var NowMoment = moment().format("MMMM Do YYYY");
  var displayDate = document.getElementById;
  ("todayDay");
  displayDate.innerHTML = NowMoment;
});
//when user clicks on save btn
$(document).ready(function () {
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var text = $(this).siblings(".userInput").val();
    var time = $(this).parent().attr("id");

    //need to save in local storage

    localStorage.setItem(time, text);
  });
});

//current date

//declare variables
//variable to
//need to save in local storage

//set event handler for all save buttons
//need button function to clear local storage and clear contents
//function to take each hour and compare to the actual time
//get items from local storage and set it in proper places
//sets date in header and current time
//
