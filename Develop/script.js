//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

// Button function to clear local storage and clear contents
$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
});

// save reference to important DOM elements
var resetBtn = document.querySelectorAll(".saveBtn");
//variable created to store events
var saveButton = document.querySelectorAll(".saveBtn");
// variable to store past, prersent & future w/color
var eventEL = document.querySelectorAll(".events");
//element that holds the hour text
var hourEl = document.querySelectorAll(".hour");

//grabs values from hour and entry divs and saves them to local storage
for ( var i = 0; i < saveButton.length; i++) { 
    $(".saveBtn").click(function (event) {
      var entry = event.target.previousElementSibling.value;
      if(entry == null) {
        return;
      }
      var timeName = event.target.previousElementSibling.previousElementSibling.textContent;
      localStorage.setItem(timeName,entry);
      
    })
};

//method that Gets the hours in a date, using local time.
var currentHour = (new Date()).getHours(); //The getHours() method returns the hour for the specified date, according to local time.
$('.time-div') //SELECT element with the class time-div"
  .each(function(){ //create Variable VAL as index position of the selector
    var val = parseInt($(this).prop('id')); //parses a string argument and returns an integer THIS then PROP will Add a new property to element ID.
    console.log($(this))
    console.log(currentHour.getHours);
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','Blue'); //future hours shows in blue
    }else if(val < currentHour && val > currentHour- 6){
      $(this).css('background-color','Red'); //past hours shows in red
    }else if(val === currentHour){
      $(this).css('background-color','White'); //current hour shows in white
    }else{
      $(this).css('background-color','Green');
    }
});