// save reference to important DOM elements
var timeDisplayEl = $("#currentDay");
var containerEl = $(".container");
var currentHour = '';
var currentHourEl;
var firstHour = 9; // first displayed time block, relative to hourMap (9AM)
var lastHour = 17; // last display time block, relative to hourMap (5PM)
var hourList = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"]; // map of military hours

var i=[];

// handle displaying the time
function displayTime() {
  var now = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeDisplayEl.text(now);
}

function createTimeBlocks()
{
//save the current hour to a data attribute so it can be accessed from an event listener
    currentHour = moment().hour();
    console.log(currentHour);

    for (i=9; i <= 17; i++) 
    {
        // create html row and first column for the hour.  
        var mainRow = $("<div>").attr({
            "class":"time-block row ",
            'id':`hour-${i}`
        });
        $(".container").append(mainRow);

        var hourField = $('<div>').text(hourList[i]).attr({
            "class": `col-md-1 `
             
        });
//is this the issue??? I think I need the hourList index there to match it for the local storage.
        // makes classes for the second column:
        //var dataField = $('<div>').attr({"class":"col-md-10"});
        var textToDo = $('<textarea>');
        //dataField.append(textToDo);
        textToDo.attr({
            "class":"col-md-10 todo description"
        });
//maybe this is it??? Didn't know how to make it these id's
//var timeBlockID=$("#hour-"+i).children(".todo");

        console.log($(textToDo).text)
        //adds section for past present future
        if (i < currentHour) {//PAST(grey)
            textToDo.addClass("past");
        }
 
        else if (i === currentHour) {//CURRENT(red)
            textToDo.addClass("present");
        }
            
        else {//FUTURE(green)
                textToDo.addClass("future");
            }
        
        // adds third column for the save button
        var saveButton = $("<i class='far fa-save save fa-lg'></i>")

        var saveTextToDo =  $("<button>").attr({
            "class": "col-md-1 save saveButton"
        });
        
        saveTextToDo.append(saveButton);
        // add new elements to container
        mainRow.append(hourField, textToDo, saveTextToDo);
    }
}
//declare hourData outside function so i can use it later.

//var hourData={
    //hour:timeBlockID,
    //textValue:(".todo")
//};
$(document).ready(function(){
$('.saveButton').on('click', function() {
    console.log("Saved button clicked");
    //get values from element where button was clicked
     var value = $(this)
       .siblings('.description')
       .val();
       console.log("This is the value of the text area", value);
     var time = $(this)
       .parent()
       .attr('id');
       console.log("This is the value of the time", time);
    
     localStorage.setItem(time, value);
    }
    )
})
//should run at beginning to pull saved data for each hour into the corresponding hour row. Says HOUR DATA not defined???
function init(){
    for( j=0; j < localStorage.length; j++ ) {
document.createElement("savedData").innerHTML = JSON.parse(localStorage.getItem("hourData"));
$(".todo").append("savedData");
}
// get data from local storge upon initialization
}

//helper functions 
setInterval(displayTime, 1000);
createTimeBlocks();
init();




//I want to save the text into a new variable when someone presses save
/* containerEl.on("click", "button", function(event){
    event.preventDefault();
    event.currentTarget;

    console.log($("input").val());
    localStorage.setItem("text",JSON.stringify($("input").val()));
}
)
*/


// $('.container')
// $('#currentDay')
//currentHour
//Loop from 9 to 17

/*for (var i=9; i<=17; i++) {
        i=$('');
        localStorage.setItem

*/
 /*   //create a new block of HTML for each hour of the data
    //saving the current hour to a data attribute so it can be accessed from an event listner

    //i = current hour of the loop, 9-17.
    // local storage key = "hour-9"

    //localStorage keys are always string values. If I want to create the key "hour-9". I need to take the prefix of hour- and add it together with i

   // var savedValueForHour = localStorage.getItem( "hour-" + i );
    //Access a number based value from a data attribute, join it together with a string so we can save a value into it. 

    //current hour should be in red. Gray is past. Future hours in light green

    //Listening and responding to button clicks

    //Event listener goes on the container. Creating dynamic buttons in the HTML and we can listen to any button click that is bubbling up from our dom. 

   /* $('.container').on('click', 'button', function(event) {

        event.target (access current thing .data()) //Can use jQuery if you want. 
//Click events coming from any button elements that may exist at any button in time. 

//We will respond to our button clicks and respond to our specific data. I need to figure out that it's hour 9
    });
    */
