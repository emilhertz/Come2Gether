//Denne funktion aktiveres når submit-knap med id="createEvent" trykkes på createUser.html
var createUserButton = document.getElementById("createEvent");
createUserButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    //Gemmer informationer fra nyt event-form i variabler
    var eventName = document.getElementById("eventName").value;
    // var eventLocation = document.getElementById("eventLocation");

    //event category
    var categoryButtons = document.getElementsByClassName("categories");
    var len = categoryButtons.length;
    var eventCategory = "";

    //for loop
    for (i=0; i<len; i++){
        if (categoryButtons[i].checked) {
            eventCategory = categoryButtons[i].value;
            break;
        }
    }

    var eventTime = document.getElementById("time").value;
    var eventDescription = document.getElementById("eventDescription").value;

    //Henter storedListOfEvents i localStorage og "parser" til array, hvor nyt event "pushes"
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
    listOfEvents.push(new Events(eventName, "x", eventCategory, eventTime, eventDescription));
    //listOfEvents stringifies og overskriver storedListOfEvents i localStorage
    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfEvents", listOfEventsString);
    //Giver besked om nyt event er oprettet
    alert(eventName + " er nu oprettet som event!");
    //Åbner Events.html når event er oprettet
    window.open("../HTML/Events.html", "_self");
};