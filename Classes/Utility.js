//Utility-klasse der indeholder static-metoder
//Static-metoder er defineret på selve klassen, og ikke  klasse-indstandser
class Utility {
    //Metode der med et if-statement undersøger om localStorage med nøglen "storedListOfUsers"
    //er null. Hvis det er sandt, skabes array'et listOfUsers, hvor der pushes to hard-codede brugere ind.
    static dummyUsers() {
        if (localStorage.getItem("storedListOfUsers") == null) {
            let listOfUsers = [];
            listOfUsers.push(new Users("Thorn","password","32","København",[]));
            listOfUsers.push(new Users("Peter","Kanin","224","Eventyrskoven",[]));

            //listOfUsers stringifies, så de kan tilknyttes localStorage
            let listOfUsersString = JSON.stringify(listOfUsers);
            localStorage.setItem("storedListOfUsers", listOfUsersString);
        }
    };
    //dummyEvents - samme fremgangsmåde som foroven
    static dummyEvent() {
        if (localStorage.getItem("storedListOfEvents") == null) {
            let listOfEvents = [];
            // Hardcodede værdier pushes til array
            listOfEvents.push(new Events("Fælles madlavning", "København", "Mad", "17:30, d.31/12-2019", "Vi mødes laver lidt lækkert mad og drikker lidt vin. s.u. d. 24/12-2019", "4", "Thorn",[]));
            listOfEvents.push(new Events("Motionsfodbold", "Odense", "Sport", "17:00, d.20/10-2019", "Vi mødes til lidt hygge fodbold, fodboldstøvler er ikke et krav men anbefales", "22", "Thorn", []));
            listOfEvents.push(new Events("Kulturnat", "København", "Kultur", "20:00, d.12/10-2019", "Vi går en tur rundt i byen og ser på hvad byen kan", "100", "Peter", []));
            listOfEvents.push(new Events("Pubcrawl", "København", "Bytur", "16:00, d.1/11-2019", "Vi tager en tur op gennem Gothersgade og besøger lidt forskellige barer på J-dag", "25", "Thorn", []));
            listOfEvents.push(new Events("Koncert med Khalid", "Aarhus", "Koncert", "11:00, 27/11-2019", "Vi tager ind og hører Khalid sammen. s.u. d 25/10-2019", "300", "Peter", []));

            //listOfEvents stringifies, så de kan tilknyttes localStorage
            let listOfEventsString = JSON.stringify(listOfEvents);
            localStorage.setItem("storedListOfEvents", listOfEventsString);
        }
    };
    //createEvent metode
    static createEvent() {
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
            listOfEvents.push(new Events(eventName, eventCity, eventCategory, "Tidspunkt", eventDescription, eventCapacity, hostUser,[]));

            //listOfEvents med nyt event stringifies og overskriver storedListOfEvents i localStorage
            let listOfEventsString = JSON.stringify(listOfEvents);
            localStorage.setItem("storedListOfEvents", listOfEventsString);

            //Giver besked om nyt event er oprettet
            alert(eventName + " er nu oprettet som event!");

            //Åbner Events.html når event er oprettet
            window.open("../HTML/Events.html", "_self");
        } else { alert(errorMessage);}
    };
    //Metode der viser events bruger deltager i
    static showJoinedEvents() {
        //for-loop der går gennem alle events
        for (let i = 0; i < listOfEvents.length; i++) {
            let participants = listOfEvents[i].eventParticipants;
            //for-loop der går gennem deltagere i event [i]
            for (let j = 0; j < participants.length; j++) {
                //if-statement der kontrollerer om signedIn deltager i event
                if (signedIn.Username === participants[j]) {
                    joinedEvents.push(listOfEvents[i].eventName);
                }
            }
        }
        //loop der opretter html-elementer der præsenterer events signedIn deltager i og dertilhørende afmeld-knapper
        for (let i = 0; i < joinedEvents.length; i++) {
            let event = document.createElement("p");
            event.innerHTML = joinedEvents[i];
            let cancel = document.createElement("button");
            cancel.innerHTML = "Afmeld";
            //denne fremgangsmåde sikrer at det specifikke event bliver valgt og kalder metoden unsubscribe
            cancel.onclick = function () {
                unsubscribedEvent = joinedEvents[i];
                Utility.unsubscribe();
            };
            event.appendChild(cancel);
            document.getElementById("participating_events").appendChild(event);
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
                subscribedEvent = listOfEvents[i];
                //variabel der tager de nuværende deltagende brugere
                let currentParticipants = subscribedEvent.eventParticipants;

                //for-loop der ser om bruger allerede deltager i event
                //var participation;
                for (let j = 0; j < currentParticipants.length; j++) {
                    if (signedIn.username === currentParticipants[j]) {
                        var participation = true;
                    }
                }
                //if-statement der henter resultatet af for-loop foroven
                if (participation) {
                    alert("Du deltager allerede i " + subscribedEvent.eventName);
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
                    subscribedEvent.eventParticipants = currentParticipants;
                    let listOfEventsString = JSON.stringify(listOfEvents);
                    localStorage.setItem("storedListOfEvents", listOfEventsString);
                    alert("Du deltager nu i: " + subscribedEvent.eventName);
                    window.open("../HTML/Events.html", "_self");

                    //Koden forneden er et godt eksempel på, hvordan vi i udviklingen er blevet klogere

                    /*//Tilføjer det event som signedIn deltager i, til signedIn.joinedEvents
                    let usersEvents = signedIn.JoinedEvents;

                    //Event'et pushes til brugerens joinedEvents array og erstatter localStorage med key: "signedIn"
                    usersEvents.push(subscribedEvent.eventName);
                    let signedInString = JSON.stringify(signedIn);
                    localStorage.setItem("signedIn", signedInString);*/

                }
            });
            document.getElementById("tilmeldEvent").appendChild(tilmeldEvent);
        }
    };
    //Klasse-metode der kan oprette brugere
    static createUser() {
        //Gemmer informationer fra HTML-form i variabler
        let newUsername = document.getElementById("username").value;
        let newPassword = document.getElementById("password").value;
        let newAge = document.getElementById("age").value;

        //Valideringsform fra BIS-øvelsestime
        var approvedInput = true;
        var errorMessage = "";

        //Ser om username er tomt, for kort, eller eksisterer i database
        if (newUsername === "") {
            approvedInput = false;
            errorMessage += "Du skal indtaste et brugernavn! \n";
        }

        //Ser om længde på username passer
        if (newUsername.length <= 3) {
            approvedInput = false;
            errorMessage += "Brugernavnet skal mindst være 4 tegn! \n";
        }

        //for-loop der ser om brugernavn i forvejen bliver brugt
        for (let i=0; i<listOfUsers.length; i++) {
            if (newUsername === listOfUsers[i].username) {
                approvedInput = false;
                errorMessage += "Brugernavnet eksisterer allerede :( \nVælg venligst et andet. (se localStorage) \n";
            }
        }

        //Ser om alderen er et tal mellem 13 og 99
        if (newAge < 13 || newAge > 99) {
            approvedInput = false;
            errorMessage += "Du skal være over 13 år (og yngre end 99 år) for at oprette en bruger \n";
        }

        //Ser om password er udfyldt og om det er for kort (skal minimum være 6 tegn)
        if (newPassword.length <= 5) {
            approvedInput = false;
            errorMessage += "Password skal minimum bestå af 6 tegn \n";
        }

        //Opretter bruger ved true approvedInput
        if (approvedInput) {
            //Ny bruger "pushes" til listOfUsers array
            listOfUsers.push(new Users(newUsername, newPassword, newAge, "", [], []));

            //listOfUsers stringifies og overskriver storedListOfUsers i localStorage
            let listOfUsersString = JSON.stringify(listOfUsers);
            localStorage.setItem("storedListOfUsers", listOfUsersString);

            //Giver besked om ny bruger er oprettet
            alert(newUsername + " er nu oprette som bruger!");

            //Åbner home.html når bruger er oprettet
            window.open("../HTML/home.html", "_self");
        } else { alert(errorMessage);}
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
    //Metode der bestemmer index af signedIn i listOfUsers
    static index () {
        for (let i=0; i<listOfUsers.length; i++) {
            if (listOfUsers[i].username === signedIn.Username) {
                return index = i;
            }
        }
    };
    //Metode der fjerner nøglen "signedIn" og åbner forsiden
    static logout() {
        //Først opdateres den specifikke user i storedListOfUsers
        //Først kaldes index-metoden
        Utility.index();
        //Derefter slettes denne bruger fra listOfUsers-array
        listOfUsers.splice(index, 1);
        //kunne ikke få splice til at indsætte, så derfor push
        listOfUsers.push(signedIn);
        //Localstorage med key:storedListOfUsers opdateres
        let listOfUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfUsersString);
        localStorage.removeItem("signedIn");
        window.open("../HTML/home.html", "_self")
    };
    //Metode der tilmelder bruger til event
    static subscribe() {
        for (let i=0; i<listOfEvents.length; i++) {
            if (subscribedEvent === listOfEvents[i].eventName) {

            }
        }
    }
    //Metode der afmelder bruger fra event
    static unsubscribe() {
        //for-loop der bestemmer index af event der skal afmeldes i listOfEvents
        for (let i=0; i<listOfEvents.length; i++) {
            if (unsubscribedEvent === listOfEvents[i].eventName) {
                let participants = listOfEvents[i].eventParticipants;
                //for-loop der fjerner signedIn fra event og opdaterer event i listOfEvents
                for (let j=0; j<participants.length; j++) {
                    if (signedIn.Username === participants[j]) {
                        //fjerner signedIn fra participants
                        participants.splice(j, 1);
                        //erstatter det gamle event med det opdaterede
                        listOfEvents.splice(i, 1, listOfEvents[i]);

                        //opdaterer storedListOfEvents i localStorage
                        let listOfEventsString = JSON.stringify(listOfEvents);
                        localStorage.setItem("storedListOfEvents", listOfEventsString);
                        location.reload();
                    }
                }
            }
        }
    }
}

//Metoderne dummyUsers/Events bliver kaldt, så det sikres at der er værdier i localStorage
Utility.dummyUsers();
Utility.dummyEvent();

//variabler defineret i global-scope
var index;
var joinedEvents = [];
var subscribedEvent;
var unsubscribedEvent;
var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
var listOfEvents = JSON.parse(localStorage.getItem("storedListOfEvents"));

var signedIn = JSON.parse(localStorage.getItem("signedIn"));
//Gør objektet signedIn til en indstands af Users-klassen, således at Users-indstands metoder kan bruges
//if-statement for at undgå syntax-fejl
if (signedIn) {
    signedIn = new Users(signedIn.username, signedIn.password, signedIn.age, signedIn.location, signedIn.joinedEvents, signedIn.hostedEvents);
}