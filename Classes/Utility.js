//Utility-klasse der indeholder static-metoder
//Static-metoder er defineret på selve klassen, og ikke en klasse-indstands
class Utility {
    //Metode der med et if-statement undersøger om localStorage med nøglen "storedListOfUsers"
    //er null. Hvis det er sandt, skabes array'et listOfUsers, hvor der pushes to hard-codede brugere ind.
    static dummyUsers() {
        if (localStorage.getItem("storedListOfUsers") == null) {
            let listOfUsers = [];
            listOfUsers.push(new Users("Thorn","password","32","København",[],["Skal rettes"]));
            listOfUsers.push(new Users("Peter","Kanin","224","Eventyrskoven",[],["Skal rettes"]));

            //listOfUsers stringifies, så de kan tilknyttes localStorage
            let listOfUsersString = JSON.stringify(listOfUsers);
            localStorage.setItem("storedListOfUsers", listOfUsersString);
        }
    };
    //Metode der med et for-loop append'er specifik event-information til specifikke div's i Events.html
    static displayEvents() {
        //for-loop der kører igennem alle events
        for (let i=0; i<listOfEvents.length; i++) {
            //node med html-tag P skabes og får tilknyttet string (eventnavn[i])
            let eventName = document.createElement("p");
            eventName.innerHTML = listOfEvents[i].eventName;
            //Klasse tilføjes for at kunne bruge CSS
            eventName.classList.add("eventDisplay");
            //Tilknytter (appendChild) alle eventnavne (noder som <p>) til div'en eventName
            document.getElementById("eventName").appendChild(eventName);

            //samme fremgangsmåde
            let eventLocation = document.createElement("p");
            eventLocation.innerHTML = listOfEvents[i].eventLocation;
            eventLocation.classList.add("eventDisplay");
            document.getElementById("eventLocation").appendChild(eventLocation);

            //samme fremgangsmåde
            let eventKategori = document.createElement("p");
            eventKategori.innerHTML = listOfEvents[i].Category;
            eventKategori.classList.add("eventDisplay");
            document.getElementById("eventKategori").appendChild(eventKategori);

            //Skal laves drastisk om, ved implementering af tidskoder
            //samme fremgangsmåde
            let eventTid = document.createElement("p");
            eventTid.innerHTML = listOfEvents[i].eventTime;
            eventTid.classList.add("eventDisplay");
            document.getElementById("eventTid").appendChild(eventTid);

            //samme fremgangsmåde
            let eventHost = document.createElement("p");
            eventHost.innerHTML = listOfEvents[i].eventHost;
            eventHost.classList.add("eventDisplay");
            document.getElementById("eventVært").appendChild(eventHost);

            //samme fremgangsmåde
            let eventBeskrivelse = document.createElement("p");
            eventBeskrivelse.innerHTML = listOfEvents[i].eventDescription;
            eventBeskrivelse.classList.add("eventDisplay");
            document.getElementById("eventBeskrivelse").appendChild(eventBeskrivelse);

            //samme fremgangsmåde
            let eventKapacitet = document.createElement("p");

            //Metode der skal beregne om et event har kapacitet
            //Variabel der tager det valgte index af listOfEvents
            let events = listOfEvents[i];
            //Variabel der bestemmer antal pladser tilbage i et event, ved at trække længden af array'et eventParticipants fra eventCapacity som er et nummer
            //Se om dette kan blive selvstændig metode
            let remainingCapacity = events.eventCapacity - events.eventParticipants.length;
            eventKapacitet.innerHTML = remainingCapacity;
            eventKapacitet.classList.add("eventDisplay");
            document.getElementById("eventKapacitet").appendChild(eventKapacitet);

            //Tilmeldningsknap (join-metode)
            let tilmeldEvent = document.createElement("p");
            tilmeldEvent.innerHTML = "Tilmeld";
            tilmeldEvent.classList.add("eventDisplay");
            //Jeg kunne ikke få værdien af index i loop ud af loop'et uden at funktionen kørte sammen med loop'et, hvorfor funktionen er skrevet herinde
            //addeventlistener der tjekker om der bliver klikket på noden. Hvis der klikkes køres funktionen nedenfor.
            tilmeldEvent.addEventListener('click', function () {
                //variabel der tager det event der bliver klikket på
                let currentEvent = listOfEvents[i];
                //variabel der tager de nuværende deltagende brugere
                let currentParticipants = currentEvent.eventParticipants;

                //for-loop der ser om bruger allerede deltager i event
                //var participation;
                for (let j = 0; j < currentParticipants.length; j++) {
                    if (signedIn.username === currentParticipants[j]) {
                        var participation = true;
                    }
                }
                //if-statement der henter resultatet af for-loop foroven
                if (participation) {
                    alert("Du deltager allerede i " + currentEvent.eventName);
                } //else if-statement der ser hvis ingen bruger er logget ind
                else if (signedIn == null) {
                    alert("Du skal være logget ind for at deltage!");
                } //else if-statement der ser om der er flere pladser
                else if (remainingCapacity === 0) {
                    alert("Der er desværre ikke flere pladser :(");
                } //hvis alle statements foroven er false, deltager brugeren i det valgte event (koden forneden kaldes)
                else {
                    //brugeren der er logget ind, pushes til array'et currentParticipants, som er defineret foroven
                    currentParticipants.push(signedIn.Username);
                    //det nye array med deltagere overskriver det gamle, og gemmes i localStorage
                    currentEvent.eventParticipants = currentParticipants;
                    let listOfEventsString = JSON.stringify(listOfEvents);
                    localStorage.setItem("storedListOfEvents", listOfEventsString);
                    alert("Du deltager nu i: " + currentEvent.eventName);
                    window.open("../HTML/Events.html", "_self");

                    //Tilføjer det event som signedIn deltager i, til signedIn.joinedEvents
                    let usersEvents = signedIn.JoinedEvents;

                    //Event'et pushes til brugerens joinedEvents array og erstatter localStorage med key: "signedIn"
                    usersEvents.push(currentEvent.eventName);
                    let signedInString = JSON.stringify(signedIn);
                    localStorage.setItem("signedIn", signedInString);

                }
            });
            document.getElementById("tilmeldEvent").appendChild(tilmeldEvent);
        }
    };
    //login metode
    static login() {
        let username = document.getElementById("loginUsername");
        let password = document.getElementById("loginPassword");

        //for-loop der bruger operators til at se om indtastede værdier stemmer overens med listOfUsers-array, som er gemt i localStorage
        for (let i=0; i < listOfUsers.length; i++) {
            if (username.value === listOfUsers[i].username && password.value === listOfUsers[i].password) {
                //Gemmer bruger som logger ind i localStorage og som string
                let signedIn = JSON.stringify(listOfUsers[i]);
                localStorage.setItem("signedIn", signedIn);
                // Åbner home.html
                window.open("../HTML/home.html", "_self");
                return
            }
        }
        alert("Forkert brugernavn eller password :(")
    };
    //Metode der finder index af signedIn i listOfUsers
    static index () {
        for (let i=0; i<listOfUsers.length; i++) {
            if (listOfUsers[i].username === signedIn.Username) {
                return index = i;
            }
        }
    };
    //Metode der fjerner nøglen "signedIn" og åbner forsiden
    static logout() {
        //signedIn skal opdatere den specifikke user i storedListOfUsers
        Utility.index();
        listOfUsers.splice(index, 1);
        listOfUsers.push(signedIn);
        let listOfUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfUsersString);
        localStorage.removeItem("signedIn");
        window.open("../HTML/home.html", "_self")
    };
}

//Metoden dummyUsers bliver kaldt, så det sikres at der er værdier i localStorage "storedListOfUsers"
Utility.dummyUsers();

//variabler defineret i global-scope
var index;
var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
