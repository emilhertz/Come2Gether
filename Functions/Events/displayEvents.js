var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));

//for-loop der kører igennem alle events
for (i=0; i<listOfEvents.length; i++) {

    //Tilknytter (appendChild) alle eventnavne (som paragraffer) til div'en eventName
    var eventName = document.createElement("p");
    eventName.innerHTML = listOfEvents[i].eventName;

    //Variabel tilknyttet tagget <hr>, som tilknytter en vandret linje under hver node
    var linje1 = document.createElement("hr");
    eventName.appendChild(linje1);
    document.getElementById("eventName").appendChild(eventName);

    //samme fremgangsmåde
    var eventLocation = document.createElement("p");
    eventLocation.innerHTML = listOfEvents[i].eventLocation;
    var linje2 = document.createElement("hr");
    eventLocation.appendChild(linje2);
    document.getElementById("eventLocation").appendChild(eventLocation);

    //samme fremgangsmåde
    var eventKategori = document.createElement("p");
    eventKategori.innerHTML = listOfEvents[i].Category;
    var linje3 = document.createElement("hr");
    eventKategori.appendChild(linje3);
    document.getElementById("eventKategori").appendChild(eventKategori);

    //Skal laves drastisk om, ved implementering af tidskoder
    //samme fremgangsmåde
    var eventTid = document.createElement("p");
    eventTid.innerHTML = listOfEvents[i].eventTime;
    var linje4 = document.createElement("hr");
    eventTid.appendChild(linje4);
    document.getElementById("eventTid").appendChild(eventTid);

    //samme fremgangsmåde
    var eventHost = document.createElement("p");
    eventHost.innerHTML = listOfEvents[i].eventHost;
    var linje5 = document.createElement("hr");
    eventHost.appendChild(linje5);
    document.getElementById("eventVært").appendChild(eventHost);

    //samme fremgangsmåde
    var eventBeskrivelse = document.createElement("p");
    eventBeskrivelse.innerHTML = listOfEvents[i].eventDescription;
    var linje6 = document.createElement("hr");
    eventBeskrivelse.appendChild(linje6);
    document.getElementById("eventBeskrivelse").appendChild(eventBeskrivelse);

    //Virker ikke
    //var eventKapacitet = document.createElement("P");
    //eventKapacitet.innerHTML = listOfEvents[i].remainingCapacity;
    //document.getElementById("eventBeskrivelse").appendChild(eventBeskrivelse);

    //samme fremgangsmåde
    var eventKapacitet = document.createElement("p");
    eventKapacitet.innerHTML = listOfEvents[i].eventCapacity;
    var linje7 = document.createElement("hr");
    eventKapacitet.appendChild(linje7);
    document.getElementById("eventKapacitet").appendChild(eventKapacitet);

    //Tilmeldningsknap
    //Virker ikke
    //var tilmeldEvent = document.createElement("button");
    //tilmeldEvent.innerHTML = "Tilmeld";
    //document.getElementById("tilmeldEvent").appendChild(tilmeldEvent);
}