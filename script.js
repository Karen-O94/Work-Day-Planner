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

                //If/Else statements compares if event is in the past, present or future and add colour to highlight each condition
                
                 // adds colour red if timeblock matches current time
                if (targetRow === currentHour) { 
                    $(this).addClass("present").removeClass("past future");
                }  // adds colour grey if timeblock occured already (past event)
                else if (targetRow < currentHour) {
                    $(this).addClass("past").removeClass("present future");
                } 
                else {  // adds colour red if timeblock is yet to occur (future event)
                    $(this).addClass("future").removeClass("present past");
                }
            });
        };

     //GET ITEMS FROM LOCALSTORAGE TO DISPLAY ON PAGE IF REFRESHED
     $("#9hour .textarea").val(localStorage.getItem("9hour"));
     $("#10hour .textarea").val(localStorage.getItem("10hour"));
     $("#11hour .textarea").val(localStorage.getItem("11hour"));
     $("#12hour .textarea").val(localStorage.getItem("12hour"));
     $("#13hour .textarea").val(localStorage.getItem("13hour"));
     $("#14hour .textarea").val(localStorage.getItem("14hour"));
     $("#15hour .textarea").val(localStorage.getItem("15hour"));
     $("#16hour .textarea").val(localStorage.getItem("16hour"));
     $("#17hour .textarea").val(localStorage.getItem("17hour"));
    //  formatRows();

    });

