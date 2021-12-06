// save reference to important DOM elements
var timeDisplayEl = $("#currentDay");
var containerEl = $(".container");
var currentHour = '';
var currentHourEl;
var firstHour = 9; // first displayed time block, relative to hourMap (9AM)
var lastHour = 17; // last display time block, relative to hourMap (5PM)
var hourList = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"]; // map of military hours
var todo = '';
var dataToSave = '';
var i;


// handle displaying the time
function displayTime() {
  var now = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeDisplayEl.text(now);
}

function createTimeBlocks(){
//save the current hour to a data attribute so it can be accessed from an event listener
currentHour = moment().hour();
    for (i=9; i <= 17; i++) {
        // create html row and first column for the hour.  
        currentHourEl = '<div class="row time-block"> ' +
            '<div class="col-md-1 hour d-flex align-items-center">' + hourList[i] + '</div> ';
        
        // makes classes for the second column: past, present, or future
        if (i < currentHour) {//PAST(grey)
            currentHourEl += '<input class="col-md-10 todo past text-center text-middle" id="text' + 
                hourList[i] + '"></input> ';
        }
        else if (i === currentHour) {//PRESENT(red)
            currentHourEl += '<input class="col-md-10 todo present" id=" text' +  hourList[i] + '" ></input> ';
        }
        else {//FUTURE(green)
            currentHourEl += '<input class="col-md-10 todo future" id=" text' + hourList[i] + '" ></input> ';
        }; 

        // adds third column for the save button
        currentHourEl +=   '<div class="col-md-1 d-flex align-items-center save">' + '<button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Save</button>'+'</div>';
      
        // add new elements to container
    
        containerEl.append(currentHourEl);
    }
    
}

function allowText (){
containerEl.on("keypress", function(event) {
  
    console.log(`Why isn't this working $("input").val()`);

}
)

//I want to save the text into a new variable when someone presses save
containerEl.on("click", "button", function(event){
    event.preventDefault();
    event.stopPropagation();
    console.log($("input").val());
    localStorage.setItem("text",JSON.stringify($("input").val()));
}
)
}
    




// $('.container')
// $('#currentDay')
//currentHour
//Loop from 9 to 17

/*for (var i=9; i<=17; i++) {
        i=$('');
        localStorage.setItem
*/
    //create a new block of HTML for each hour of the data
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

setInterval(displayTime, 1000);
createTimeBlocks();
allowText();

