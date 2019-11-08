//Denne funktion aktiveres når submit-knap med id="createEvent" trykkes på createUser.html
var createUserButton = document.getElementById("createEvent");
createUserButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    //Gemmer informationer fra nyt event-form i variabler
    var eventName = document.getElementById("eventName").value;
    var eventCapacity = document.getElementById("capacity").value;

    //Henter eventCategory og ser hvilken kategori er valgt med for-loop
    var categoryButtons = document.getElementsByName("categories");

    for (i=0; i<categoryButtons.length; i++){
        if (categoryButtons[i].checked) {
            var eventCategory = categoryButtons[i].value;
            break;
        }
    }

    //Indtil der findes en løsning med adresser, bruges kun byer
    var eventCity = document.getElementById("lokation").value;

    //Skal fixes
    var eventTime = document.getElementById("time").value;

    //Virker
    var eventDescription = document.getElementById("eventDescription").value;

    //Validerings form
    var approvedInput = true;
    var errorMessage = "";

    //Tjekker at eventnavn er større eller lig med 3 og mindre end 20 tegn
    if (eventName.length <= 3 || eventName.length > 21) {
        approvedInput = false;
        errorMessage += "Eventnavn skal være mellem 3 og 20 tegn \n";
    }

    //Tjekker at antal pladser er mellem 3 og 100
    if (eventCapacity < 2 || eventCapacity > 101) {
        approvedInput = false;
        errorMessage += "Antal pladser skal være mellem 3 og 100 \n";
    }

    /*Tjekker at en af kategorierne er valgt
    if (categoryButtons == "") {
        approvedInput = false;
        errorMessage += "Kategori skal være defineret \n";
    } */

    //Ser om lokalitet er valgt
    if (eventCity === "Byer") {
        approvedInput = false;
        errorMessage += "Vælg venligst en by! \n";
    }

    //Få styr på dato og tid!!

    //Tjekker at der er skrevet i beskrivelses boksen
    if (eventDescription === "") {
        approvedInput = false;
        errorMessage += "Der skal skrives en beskrivelse til dit event \n";
    }

    //Opretter event ved true approvedInput
    if (approvedInput) {
    //Henter bruger som er logget ind, så denne tilknyttes event som hostUser
    var hostUser = JSON.parse(localStorage.getItem("signedIn"));

    //Henter storedListOfEvents i localStorage og "parser" til array, hvor nyt event "pushes"
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
    listOfEvents.push(new Events(eventName, eventCity, eventCategory, eventTime, eventDescription, eventCapacity, hostUser.username, ""));

    //listOfEvents stringifies og overskriver storedListOfEvents i localStorage
    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfEvents", listOfEventsString);

    //Giver besked om nyt event er oprettet
    alert(eventName + " er nu oprettet som event!");

    //Åbner Events.html når event er oprettet
    window.open("../HTML/Events.html", "_self");
} else { alert(errorMessage);}
}