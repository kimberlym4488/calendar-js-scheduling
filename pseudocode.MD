We need a grid/table that displays basic time. In JS.

 Divs for each hour it appears (display flex?)
Modify javascript, generating the time blocks from javascript (template literals?) jquery and jquery UI. Series of divs, one for each hour of the day to represent on their workday scheduler (9 am through 5 pm) Save icon next to it. Confirm message, appointment added to local storage. 

Values should be there when I refresh the page.

// $('.container')
// $('#currentDay')
//currentHour
//Loop from 9 to 17
for (var i=9; i<=17; i++) {


    //create a new block of HTML for each hour of the data
    //saving the current hour to a data attribute so it can be accessed from an event listner

    //i = current hour of the loop, 9-17.
    // local storage key = "hour-9"

    localStorage keys are always string values. If I want to create the key "hour-9". I need to take the prefix of hour- and add it together with i

    var savedValueForHour = localStorage.getItem( "hour-" + i );
    Access a number based value from a data attribute, join it together with a string so we can save a value into it. 

    Listening and responding to button clicks

    Event listener goes on the container. Creating dynamic buttons in the HTML and we can listen to any button click that is bubbling up from our dom. 

    $('.container').on('click', 'button', function(event) {

        //event.target (access current thing .data()) Can use jQuery if you want. 
Click events coming from any button elements that may exist at any button in time. 

We will respond to our button clicks and respond to our specific data. I need to figure out that it's hour 9
    });
    


}>)

create the button using jQuery or document.createElement. Assign it an ID. button-${hourList[i]}
based off of the hour list of the button you can find the input that is in the text-hourList. 

Assign the click event to the button after it is created. $(".button).click(function(e))
event.currentTarget
button-hourList[i] 
.slice want just the hour list. 
 text + hourList[i].
"hourList[i]":($("input").val())
