// If-statement der ser om localstorage med key: listOfEvents er tom.hvis der er tilfælder blier hard-codede events tilknyttet som en string
if (localStorage.getItem("storedListOfEvents") == null) {
    var listOfEvents = [];
// Hardcodede værdier til array
    listOfEvents.push(new Events("Fælles madlavning", "Amalienborg", "Food", "17:30, d.31/12-2019", "Vi mødes laver lidt lækkert mad og drikker lidt vin. s.u. d. 24/12-2019"));
    listOfEvents.push(new Events("Motionsfodbold", "Parken", "Sport", "17:00, d.20/10-2019", "Vi mødes til lidt hygge fodbold, jeg har bold med, fodboldstøvler er ikke et krav men det anbefales. s.u. 18/10-2019"));
    listOfEvents.push(new Events("Kulturnat", "København, mødested Kongens Nytorv", "Culture", "20:00, d.12/10-2019", "Vi går en tur rundt i byen og ser på hvad byen kan"));
    listOfEvents.push(new Events("Pubcrawl", "Krydset af Gothersgade og Nørrevoldgade", "Going_out", "16:00, d.1/11-2019", "Vi tager en tur op gennem Gothersgade og besøger lidt forskellige barer på J-dag"));
    listOfEvents.push(new Events("Koncert med Khalid", "Royal Arena", "Concert", "11:00, 27/11-2019", "Vi tager ind og hører Khalid sammen. s.u. d 25/10-2019"));

    var listOfEventsString = JSON.stringify(listOfEvents);
    localStorage.setItem("storedListOfEvents", listOfEventsString);


} else {
    //localStorage med key: "storedListOfEvents" er ikke tomt, og den data hentes og gøres til objekter i arry'et listOfEvents
    var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));
}
