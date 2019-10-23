//Denne funktion aktiveres når submit-knap med id="createUser" trykkes på opretBruger.html
var createUserButton = document.getElementById("createUser");
createUserButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();
    //Opret bruger funktion, som gemmer ny bruger i localStorage sammen med eksisterende brugere (push)

    //Gemmer informationer fra ny bruger-form i variabler
    var newUsername = document.getElementById("username").value;
    var newPassword = document.getElementById("password").value;
    var newAge = document.getElementById("age").value;
    var newLocation = document.getElementById("lokation").value;

    //Henter storedListOfUsers i localStorage og "parser" til array, hvor ny bruger "pushes"
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
    listOfUsers.push(new Users(newUsername, newPassword, newAge, newLocation, "", ""));
    //listOfUsers stringifies og overskriver storedListOfUsers localStorage
    var listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
    //Giver besked om ny bruger er oprettet
    alert(newUsername + " er nu oprette som bruger!");
    //Åbner home.html når bruger er oprettet (virker ikke)
    window.open("../HTML/home.html", "_self");
};



//Validering af form (Celina)

//Tjek at der overhoved er indtastet værdier (alert)
//Tjek at by er valgt i drop-down (og ikke bare byer)
//Tjek at alder er mellem 13 og 99 (alert)
//Tjek at password minimum er 6 tegn (alert)
//Tjek at brugernavn ikke eksisterer i database (alert)