//EventUtility-klasse der indeholder static-metoder
//Static-metoder er defineret på selve klassen, og ikke klasse-indstandser
class UsersUtility {
    //Metode der med et if-statement undersøger om localStorage med nøglen "storedListOfUsers"
    //er null. Hvis det er sandt, skabes array'et listOfUsers, hvor der pushes to hard-codede brugere ind.
    static dummyUsers() {
        if (localStorage.getItem("storedListOfUsers") == null) {
            let listOfUsers = [];
            listOfUsers.push(new Users("Thorn","password","32","København"));
            listOfUsers.push(new Users("Peter","Kanin","224","Eventyrskoven"));

            //listOfUsers stringifies, så de kan tilknyttes localStorage
            let listOfUsersString = JSON.stringify(listOfUsers);
            localStorage.setItem("storedListOfUsers", listOfUsersString);
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
            window.open("/", "_self");
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
                window.open("/", "_self");
                return
            }
        }
        alert("Forkert brugernavn eller password :(")
    };
    //Metode der fjerner nøglen "signedIn", opdaterer listOfUsers og åbner forsiden
    static logout() {
        //Den specifikke user i storedListOfUsers opdateres
        //Først bestemmes index af signedIn i listOfUsers ved hjælp af findIndex-metoden
        index = listOfUsers.findIndex(obj => obj.username === signedIn.Username);
        //Derefter opdateres denne bruger fra listOfUsers-array
        listOfUsers.splice(index, 1, signedIn);

        //Localstorage med key:storedListOfUsers opdateres
        let listOfUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfUsersString);
        localStorage.removeItem("signedIn");
        window.open("/", "_self")
    };
    //Metode til at ændre password
    static changePassword() {
        //Først henter vi inputtene fra html formlen og laver dem til variabler
        let oldPassword = document.getElementById("oldPassword").value;
        let newPassword = document.getElementById("newPassword").value;
        let repeatNewPassword = document.getElementById("repeatNewPassword").value;

        // Opretter et aproved input som er true, så vi kan definere et if statment som enten true eller false
        // Derudover oprettes også en errormessage, som vi senere bruger til at alerte forskellige fejl
        let approvedInput = true;
        let errorMessage = "";

        //Tjekker om oldPassword er ulig det password man har brugt til at logge ind
        if (oldPassword !== signedIn.Password) {
            approvedInput = false;
            errorMessage += "Du har tastet dit gamle password forkert \n";
        }

        //Tjekker om det nye password er længere end 5 tegn
        if (newPassword.length <= 5) {
            approvedInput = false;
            errorMessage += "Dit nye password skal være mindst 6 cifre langt \n";
        }
        //Tjekker om det newPassword er ulig med repeatNewPassword
        if (newPassword !== repeatNewPassword) {
            approvedInput = false;
            errorMessage += "Dit nye password stemmer ikke overens med gentagelsen \n";
        }
        //laver et if statment som kommer i spil når approvedInput er true
        /*Tjekker at oldPassword er lig med det man har brugt til at logge ind
        Derudover tjekkes der også efter om newPassword er lig med repeatNewPassword
        Hvis dette er tilfældet ændres signedIn Password til det nye password
        herefter bruges værktøjet stringify til at gøre signedinstring til en string
        der kan smides op i localstorage.
        Efter det er smidt i localstorage, alertes der endten en bekræftelse på at man
        har ændret password, hvis ikke alertes der en errormessage */
        if (approvedInput) {
            signedIn.Password = newPassword;
            let signedInString = JSON.stringify(signedIn);
            localStorage.setItem("signedIn", signedInString);
            alert( "Du har nu skiftet password");
        }
        else { alert(errorMessage);}
    }
}

//Metoden dummyEvents bliver kaldt, så det sikres at der er værdier i localStorage storedListOfEvent
UsersUtility.dummyUsers();

//variabler defineret i global-scope
var index;
var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));

var signedIn = JSON.parse(localStorage.getItem("signedIn"));
//Gør objektet signedIn til en indstands af Users-klassen, således at Users-indstands metoder kan bruges
//if-statement for at undgå syntax-fejl
if (signedIn) {
    signedIn = new Users(signedIn.username, signedIn.password, signedIn.age);
}
