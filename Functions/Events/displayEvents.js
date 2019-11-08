var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));

//for-loop der kører igennem alle events
for (i=0; i<listOfEvents.length; i++) {

    //node med html-tag P skabes og får tilknyttet string (eventnavn[i])
    var eventName = document.createElement("p");
    eventName.innerHTML = listOfEvents[i].eventName;
    //Klasse tilføjes for at kunne bruge CSS
    eventName.classList.add("eventDisplay");
    //Tilknytter (appendChild) alle eventnavne (noder som paragraffer) til div'en eventName
    document.getElementById("eventName").appendChild(eventName);

    //samme fremgangsmåde
    var eventLocation = document.createElement("p");
    eventLocation.innerHTML = listOfEvents[i].eventLocation;
    eventLocation.classList.add("eventDisplay");
    document.getElementById("eventLocation").appendChild(eventLocation);

    //samme fremgangsmåde
    var eventKategori = document.createElement("p");
    eventKategori.innerHTML = listOfEvents[i].Category;
    eventKategori.classList.add("eventDisplay");
    document.getElementById("eventKategori").appendChild(eventKategori);

    //Skal laves drastisk om, ved implementering af tidskoder
    //samme fremgangsmåde
    var eventTid = document.createElement("p");
    eventTid.innerHTML = listOfEvents[i].eventTime;
    eventTid.classList.add("eventDisplay");
    document.getElementById("eventTid").appendChild(eventTid);

    //samme fremgangsmåde
    var eventHost = document.createElement("p");
    eventHost.innerHTML = listOfEvents[i].eventHost;
    eventHost.classList.add("eventDisplay");
    document.getElementById("eventVært").appendChild(eventHost);

    //samme fremgangsmåde
    var eventBeskrivelse = document.createElement("p");
    eventBeskrivelse.innerHTML = listOfEvents[i].eventDescription;
    eventBeskrivelse.classList.add("eventDisplay");
    document.getElementById("eventBeskrivelse").appendChild(eventBeskrivelse);

    //Virker ikke
    //var eventKapacitet = document.createElement("P");
    //eventKapacitet.innerHTML = listOfEvents[i].remainingCapacity;
    //document.getElementById("eventBeskrivelse").appendChild(eventBeskrivelse);

    //samme fremgangsmåde
    var eventKapacitet = document.createElement("p");
    eventKapacitet.innerHTML = listOfEvents[i].eventCapacity;
    eventKapacitet.classList.add("eventDisplay");
    document.getElementById("eventKapacitet").appendChild(eventKapacitet);

    //Tilmeldningsknap (beskriv yderligere)
    var tilmeldEvent = document.createElement("p");

    tilmeldEvent.addEventListener("click", function () {
        var ep = listOfEvents[i].eventParticipants;
        console.log(ep);
    });
    tilmeldEvent.innerHTML = "Tilmeld";
    tilmeldEvent.classList.add("eventDisplay");
    document.getElementById("tilmeldEvent").appendChild(tilmeldEvent);

}