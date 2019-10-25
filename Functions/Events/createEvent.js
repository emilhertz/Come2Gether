//Denne funktion aktiveres når submit-knap med id="createEvent" trykkes på createUser.html
var createUserButton = document.getElementById("createEvent");
createUserButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    //Gemmer informationer fra nyt event-form i variabler
    var eventName = document.getElementById("eventName").value;
    var eventAddress = document.getElementById("?").value;
   //...

    //Lav for-loop der bestemmer radioknapper (se BIS)
    var eventCategory = document.getElementById("?").value;


    //Henter storedListOfEvents i localStorage og "parser" til array, hvor nyt event "pushes"
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
    listOfEvents.push(new Events(eventName, ));
    //listOfEvents stringifies og overskriver storedListOfEvents i localStorage
    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfEvents", listOfEventsString);
    //Giver besked om nyt event er oprettet
    alert(eventName + " er nu oprettet som event!");
    //Åbner Events.html når event er oprettet
    window.open("../HTML/Events.html", "_self");
};