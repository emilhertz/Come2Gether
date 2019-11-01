//Denne funktion aktiveres når submit-knap med id="createEvent" trykkes på createUser.html
var createUserButton = document.getElementById("createEvent");
createUserButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    //Gemmer informationer fra nyt event-form i variabler
    var eventName = document.getElementById("eventName").value;

    //Henter eventCategory og ser hvilken kategori er valgt med for-loop
    var categoryButtons = document.getElementsByName("categories");
    var eventCategory = "";

    for (i=0; i<categoryButtons.length; i++){
        if (categoryButtons[i].checked) {
            eventCategory = categoryButtons[i].value;
            break;
        }
    }

    //Indtil der findes en løsning med adresser, bruges kun byer
    // var eventStreet = document.getElementById("gadenavn");
    // var eventHouseNo = document.getElementById("husnummer");
    // var eventLocation = eventStreet + " " + eventHouseNo + ", " + eventCity;
    var eventCity = document.getElementById("city");



    var eventTime = document.getElementById("time").value;
    var eventDescription = document.getElementById("eventDescription").value;

    //Validering (mangler - se createUser)


    //Henter bruger som er logget ind, så denne tilknyttes event som hostUser
    var hostUser = JSON.parse(localStorage.getItem("signedIn"));

    //Henter storedListOfEvents i localStorage og "parser" til array, hvor nyt event "pushes"
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
    listOfEvents.push(new Events(eventName, eventCity, eventCategory, eventTime, eventDescription, "et tal", hostUser.username));
    //listOfEvents stringifies og overskriver storedListOfEvents i localStorage
    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfEvents", listOfEventsString);
    //Giver besked om nyt event er oprettet
    alert(eventName + " er nu oprettet som event!");
    //Åbner Events.html når event er oprettet
    window.open("../HTML/Events.html", "_self");
};