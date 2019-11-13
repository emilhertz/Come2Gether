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
            listOfEvents.push(new Events("Fælles madlavning", "København", "Mad", "17:30, d.31/12-2019", "Vi mødes laver lidt lækkert mad og drikker lidt vin. s.u. d. 24/12-2019", "4", "Thorn","test"));
            listOfEvents.push(new Events("Motionsfodbold", "Odense", "Sport", "17:00, d.20/10-2019", "Vi mødes til lidt hygge fodbold, fodboldstøvler er ikke et krav men anbefales", "22", "Thorn"));
            listOfEvents.push(new Events("Kulturnat", "København", "Kultur", "20:00, d.12/10-2019", "Vi går en tur rundt i byen og ser på hvad byen kan", "100", "Peter"));
            listOfEvents.push(new Events("Pubcrawl", "København", "Bytur", "16:00, d.1/11-2019", "Vi tager en tur op gennem Gothersgade og besøger lidt forskellige barer på J-dag", "25", "Thorn"));
            listOfEvents.push(new Events("Koncert med Khalid", "Aarhus", "Koncert", "11:00, 27/11-2019", "Vi tager ind og hører Khalid sammen. s.u. d 25/10-2019", "300", "Peter"));

            //listOfEvents stringifies, så de kan tilknyttes localStorage
            let listOfEventsString = JSON.stringify(listOfEvents);
            localStorage.setItem("storedListOfEvents", listOfEventsString);
        }
    };
    //Metode der skal sikre at event har kapacitet hvis en bruger ønsker at deltage
    //Virker ikke
    remainingCapacity() {
        var remainingCapacity = this.eventCapacity.length - this.eventParticipants.length;
        var joinEvent = true;
        if (remainingCapacity > 0) {
            return remainingCapacity.length;
        } else {joinEvent = false;}
    }
}

//Metoden dummyEvents bliver kaldt, så det sikres at der er værdier i localStorage "storedListOfEvents"
Events.dummyEvent();

//variabler i global scope, så de kan tilgåes i flere dokumenter
var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));