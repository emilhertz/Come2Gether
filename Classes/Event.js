class Event {
    constructor(eventName, eventLocation, Categories, eventTime, eventDescription) {
        this._eventName = eventName;
        this._eventLocation = eventLocation;
        this._Categories = Categories;
        this._eventTime = eventTime;
        this._eventDescription = eventDescription;
    }
}
// Array der bruges til login-process
    let listOfEvent = [];

// Hardcodede værdier til array
    listOfEvent.push(new Event("Fælles madlavning", "Amalienborg","Food", "17:30, d.31/12-2019", "Vi mødes laver lidt lækkert mad og drikker lidt vin. s.u. d. 24/12-2019"));
    listOfEvent.push(new Event("Motionsfodbold", "Parken", "Sport", "17:00, d.20/10-2019","Vi mødes til lidt hygge fodbold, jeg har bold med, fodboldstøvler er ikke et krav men det anbefales. s.u. 18/10-2019"));
    listOfEvent.push(new Event("Kulturnat", "København, mødested Kongens Nytorv", "Culture", "20:00, d.12/10-2019", "Vi går en tur rundt i byen og ser på hvad byen kan"));
    listOfEvent.push(new Event("Pubcrawl", "Krydset af Gothersgade og Nørrevoldgade", "Going_out", "16:00, d.1/11-2019", "Vi tager en tur op gennem Gothersgade og besøger lidt forskellige barer på J-dag")
    listOfEvent.push(new Event("Koncert med Khalid", "Royal Arena", "Concert", "11:00, 27/11-2019", "Vi tager ind og hører Khalid sammen. s.u. d 25/10-2019"))

// Liste af login i konsol
    console.log(listOfEvent);


