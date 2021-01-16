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
            console.log("hour", time);
            console.log("input", userInput);

            //setting time and user's text input into the localStorage
            localStorage.setItem(time, userInput);
        })
        //Write function that retrieves the value of the data hour
        function formatRows() {
            //variable to sa
            var currentHour = moment().hour();
            
            //Use for Each to loop through each time block
            timeBlock.each(function () {

                //retrieves numerical value of id (time)
                var targetRow = parseInt($(this).attr("id").split("hour")[0]);
                console.log
                //Compares if event is in the past, present or future and add colour to highlight each condition
                if (targetRow === currentHour) { //if timeblock
                    $(this).addClass("present").removeClass("past future");
                } 
                else if (targetRow < currentHour) {
                    $(this).addClass("past").removeClass("present future");
                } 
                else { //(targetRow > currentHour)
                    $(this).addClass("future").removeClass("present past");
                }
            });
        };

     //GET ITEMS FROM LOCALSTORAGE TO DISPLAY ON PAGE IF REFRESHED
     $("#9hour .textarea").val(localStorage.getItem("9hour"));
     $("#10hour .textarea").val(localStorage.getItem("10hour"));
     $("#11hour .textarea").val(localStorage.getItem("11hour"));
     $("#12hour .textarea").val(localStorage.getItem("12hour"));
     $("#1hour .textarea").val(localStorage.getItem("1hour"));
     $("#2hour .textarea").val(localStorage.getItem("2hour"));
     $("#3hour .textarea").val(localStorage.getItem("3hour"));
     $("#4hour .textarea").val(localStorage.getItem("4hour"));
     $("#5hour .textarea").val(localStorage.getItem("5hour"));
     formatRows();

    })

     // var anyHour = ["#9hour", "#10hour", "#11hour","#12hour","#1hour", "#2hour","#3hour","#4hour","#5hour"]
     //for (var i=0, i < anyHour.length, i++) {

     //}


