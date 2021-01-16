// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//variables 
var currentDate = moment().format('LL');

var currentDay = $("#currentDay");
var timeBlock = $(".time-block");
var textArea = $("textarea");

//Set current date beneath Work Scheduler Heading
currentDay.text(currentDate);
console.log(currentDate);

$(document).ready(function () {
    //add click event to saveBtn 
        $(".saveBtn").on("click", function () {
            var time = $(this).closest("div").attr("id");
            var userInput = $(this).siblings("textarea").val();
            console.log("jquery", time);
            console.log("input", userInput);

            //setting time and user's text input into the localStorage
            localStorage.setItem(time, userInput);
        })
        // //Write function that retrieves the value of the data hour
        // function formatRows() {
        //     //variable to sa
        //     var currentHour = moment().hour();
        //     timeBlock.each(function () {

        //         //retrieves numerical value of id (time)
        //         var targetRow = parseInt($(this).attr("id").split("hour")[0]);
        //         console.log
        //         //Compares if event is in the past, present or future and add colour to highlight each condition
        //         if (targetRow == currentHour) { //if timeblock
        //             $(this).addClass("present").removeClass("past future");
        //         } 
        //         else if (targetRow < currentHour) {
        //             $(this).addClass("past").removeClass("present future");
        //         } 
        //         else { //(targetRow > currentHour)
        //             $(this).addClass("future").removeClass("present past");
        //         }
        //     });
        // };
        // formatRows();
    })




