class Events {
    //Klassens variabler
    constructor(eventName, eventLocation, Category, eventTime, eventDescription, eventCapacity, eventHost, eventParticipants) {
        this.eventName = eventName;
        this.eventLocation = eventLocation;
        this.Category = Category;
        this.eventTime = eventTime;
        this.eventDescription = eventDescription;
        this.eventCapacity = eventCapacity;
        this.eventHost = eventHost;
        this.eventParticipants = eventParticipants;
    }
    static dummyEvent() {
        if (localStorage.getItem("storedListOfEvents") == null) {
            let listOfEvents = [];
            // Hardcodede værdier pushes til array
            listOfEvents.push(new Events("Fælles madlavning", "København", "Mad", "17:30, d.31/12-2019", "Vi mødes laver lidt lækkert mad og drikker lidt vin. s.u. d. 24/12-2019", "4", "Thorn","3"));
            listOfEvents.push(new Events("Motionsfodbold", "Odense", "Sport", "17:00, d.20/10-2019", "Vi mødes til lidt hygge fodbold, fodboldstøvler er ikke et krav men anbefales", "22", "Thorn", "1"));
            listOfEvents.push(new Events("Kulturnat", "København", "Kultur", "20:00, d.12/10-2019", "Vi går en tur rundt i byen og ser på hvad byen kan", "100", "Peter", "42"));
            listOfEvents.push(new Events("Pubcrawl", "København", "Bytur", "16:00, d.1/11-2019", "Vi tager en tur op gennem Gothersgade og besøger lidt forskellige barer på J-dag", "25", "Thorn", "24"));
            listOfEvents.push(new Events("Koncert med Khalid", "Aarhus", "Koncert", "11:00, 27/11-2019", "Vi tager ind og hører Khalid sammen. s.u. d 25/10-2019", "300", "Peter", "300"));

            //listOfEvents stringifies, så de kan tilknyttes localStorage
            let listOfEventsString = JSON.stringify(listOfEvents);
            localStorage.setItem("storedListOfEvents", listOfEventsString);
        }
    };
    //createEvent metode
    static create() {
        //Gemmer informationer fra nyt event-form i variabler
        let eventName = document.getElementById("eventName").value;
        let eventCapacity = document.getElementById("capacity").value;
        let eventDescription = document.getElementById("eventDescription").value;

        //Indtil der findes en løsning med adresser, bruges kun byer
        let eventCity = document.getElementById("lokation").value;

        //Henter eventCategory og ser hvilken kategori er valgt med for-loop
        let categoryButtons = document.getElementsByName("categories");
        let eventCategory = "";

        let validRadio = false;
        for (let i=0; i<categoryButtons.length; i++){
            if (categoryButtons[i].checked) {
                eventCategory = categoryButtons[i].value;
                validRadio = true;
            }
        }

        //Valideringsform
        let approvedInput = true;
        let errorMessage = "";

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

        //Tjekker at en af kategorierne er valgt
        if (validRadio === false) {
            approvedInput = false;
            errorMessage += "Du skal vælge en katagori \n";
        }

        //Ser om lokalitet er valgt
        if (eventCity === "Byer") {
            approvedInput = false;
            errorMessage += "Vælg venligst en by! \n";
        }

        //Tjekker at der er skrevet i beskrivelses boksen
        if (eventDescription === "") {
            approvedInput = false;
            errorMessage += "Der skal skrives en beskrivelse til dit event \n";
        }

        //Opretter event ved true approvedInput
        if (approvedInput) {
            //Henter bruger som er logget ind, så denne tilknyttes event som hostUser
            let hostUser = signedIn.username;

            //Push'er nyt event til listOfEvents
            listOfEvents.push(new Events(eventName, eventCity, eventCategory, "Tidspunkt", eventDescription, eventCapacity, hostUser, "0"));

            //listOfEvents med nyt event stringifies og overskriver storedListOfEvents i localStorage
            let listOfEventsString = JSON.stringify(listOfEvents);
            localStorage.setItem("storedListOfEvents", listOfEventsString);

            //Giver besked om nyt event er oprettet
            alert(eventName + " er nu oprettet som event!");

            //Åbner Events.html når event er oprettet
            window.open("../HTML/Events.html", "_self");
        } else { alert(errorMessage);}
    };
    //Metode der skal undersøge om et event har kapacitet hvis en bruger ønsker at deltage
    static capacity(event) {
        let remainingCapacity = event.eventCapacity - event.eventParticipants;
        let joinEvent = true;
        if (remainingCapacity > 0) {
            return remainingCapacity;
        } else {joinEvent = false; return "0"}
    };
    //eksperimentielt eventDisplay
    //VIRKER IKKE :(
    static displayEvents() {
        listOfEvents.forEach(display);

        function display(item, index) {
            document.getElementById("eventName").appendChild(listOfEvents.eventName)
        }
    };

    //Lav joinEvent
    //Lav leaveEvent
    //Lav editEvent
    //Lav deleteEvent
}

//Metoden dummyEvents bliver kaldt, så det sikres at der er værdier i localStorage "storedListOfEvents"
Events.dummyEvent();

//variabler i global scope, så de kan tilgåes flere steder
var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));