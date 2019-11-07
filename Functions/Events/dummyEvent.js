// If-statement der ser om localstorage med key: storedListOfEvents er tom. Hvis der er tilfældet bliver hard-codede events tilknyttet
if (localStorage.getItem("storedListOfEvents") == null) {
    var listOfEvents = [];
// Hardcodede værdier pushes til array
    listOfEvents.push(new Events("Fælles madlavning", "København", "Mad", "17:30, d.31/12-2019", "Vi mødes laver lidt lækkert mad og drikker lidt vin. s.u. d. 24/12-2019", "4", "Thorn", "Peter"));
    listOfEvents.push(new Events("Motionsfodbold", "Odense", "Sport", "17:00, d.20/10-2019", "Vi mødes til lidt hygge fodbold, jeg har bold med, fodboldstøvler er ikke et krav men det anbefales. s.u. 18/10-2019", "22", "Thorn"));
    listOfEvents.push(new Events("Kulturnat", "København", "Kultur", "20:00, d.12/10-2019", "Vi går en tur rundt i byen og ser på hvad byen kan", "100", "Peter"));
    listOfEvents.push(new Events("Pubcrawl", "København", "Bytur", "16:00, d.1/11-2019", "Vi tager en tur op gennem Gothersgade og besøger lidt forskellige barer på J-dag", "25", "Thorn"));
    listOfEvents.push(new Events("Koncert med Khalid", "Aarhus", "Koncert", "11:00, 27/11-2019", "Vi tager ind og hører Khalid sammen. s.u. d 25/10-2019", "300", "Peter"));

    ////listOfEvents stringifies, så de kan tilknyttes localStorage
    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfEvents", listOfEventsString);
} else {
    //localStorage med key: "storedListOfEvents" er ikke tomt, og den data hentes og gøres til objekter i arry'et listOfEvents
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
}
