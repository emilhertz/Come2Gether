// User-klasse
class Users {
    constructor(username, password, age, location, joinedEvents, hostedEvents) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location;
        this.joinedEvents = joinedEvents;
        this.hostedEvents = hostedEvents;
    };
    get Username () {
        return this.username;
    }
    get Password () {
        return this.password;
    }
    get Age () {
        return this.age;
    }
    get Location () {
        return this.location;
    }
    get JoinedEvents () {
        return this.joinedEvents;
    }
    get HostedEvents () {
        return this.hostedEvents;
    }
    set Password (newPassword) {
        this.password = newPassword;
    }
    //Klasse-metode der kan oprette brugere
    static create() {
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
    //Implementer ændre password metode (minSide.html)
    //Implmenter slet bruger metode (minSide.html)
}





var signedIn = JSON.parse(localStorage.getItem("signedIn"));
//Gør objektet signedIn til en indstands af Users-klassen, således at Users-indstands metoder kan bruges
//if-statement for at undgå syntax-fejl
if (signedIn) {
signedIn = new Users(signedIn.username, signedIn.password, signedIn.age, signedIn.location, signedIn.joinedEvents, signedIn.hostedEvents);
}