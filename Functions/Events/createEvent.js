//Denne funktion aktiveres når submit-knap med id="createEvent" trykkes på opretBruger.html
var createUserButton = document.getElementById("createEvent");
createUserButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();
    //Opret event funktion, som gemmer nyt event i localStorage sammen med eksisterende event (push)

    //Gemmer informationer fra nyt event-form i variabler
    // var newUsername = document.getElementById("username").value;
    // var newPassword = document.getElementById("password").value;
    // var newAge = document.getElementById("age").value;
    // var newLocation = document.getElementById("lokation").value;


    //Events
    //Henter storedListOfEvents i localStorage og "parser" til array, hvor nyt event "pushes"
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
    listOfEvents.push(new Events("test"));
    //listOfUsers stringifies og overskriver storedListOfUsers localStorage
    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfUsers", listOfEventsString);
    //Giver besked om ny bruger er oprettet
    alert("? er nu oprette som event!");
    //Åbner home.html når bruger er oprettet
    window.open("../HTML/home.html", "_self");
};