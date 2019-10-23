//Opret bruger funktion, som gemmer ny bruger i localStorage sammen med eksisterende brugere (push)
function createUser() {
    //Gemmer informationer fra ny bruger-form i variabler
    var newUsername = document.getElementById("username").value;
    var newPassword = document.getElementById("password").value;
    var newAge = document.getElementById("age").value;
    var newLocation = document.getElementById("lokation").value;

    //Henter storedListOfUsers i localStorage og "parser" til array, hvor ny bruger "pushes"
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
    listOfUsers.push(new Users(newUsername, newPassword, newAge, newLocation, "", ""));
    //listOfUsers stringifies og sættes som den nye værdi i localStorage
    var listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
    //alert bruger oprettet
    //retur til home-page
    //sørg for at storedListOfUsers altid er oprettet
}



//Validering af form (Celina)

//Tjek at alder er mellem 13 og 99 (alert)
//Tjek at password minimum er 6 tegn (alert)
//Tjek at brugernavn ikke eksisterer i database (alert)