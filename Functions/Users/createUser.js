//Denne funktion aktiveres når submit-knap med id="createUser" trykkes på createUser.html
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

    // Valideringsform
    var form_valid = true;
    var validation_message = "" ;

    //validering af om username er tomt, for kort, eller eksisterer i database
    if (newUsername === "") {
        form_valid = false;
        validation_message += "Du skal indtaste et brugernavn! \n";
    }

    if (newUsername <= 3) {
        form_valid = false;
        validation_message += "Brugernavnet skal være længere end 3 tegn! \n";
    }

    // (EMIL) if (newUsername === localStorage.getItem(storedListOfUsers.username) {
        form_valid = false;
        validation_message += "Brugernavnet eksisterer allerede, vælg venligst et andet. \n";
    }





    //Skal kun køre ved positiv validering
    //Henter storedListOfUsers i localStorage og "parser" til array, hvor ny bruger "pushes"
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
    listOfUsers.push(new Users(newUsername, newPassword, newAge, newLocation, "", ""));
    //listOfUsers stringifies og overskriver storedListOfUsers localStorage
    var listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
    //Giver besked om ny bruger er oprettet
    alert(newUsername + " er nu oprette som bruger!");
    //Åbner home.html når bruger er oprettet
    window.open("../HTML/home.html", "_self");


// Valideringsform
var form_valid = true;
var validation_message = "" ;

if (createUserButton) {
    form_valid=false;
    validation_message += "Ups, du mangler at udfylde ... \n";

}

//validation: name
if (newUsername !== "") {
    form_valid = false;
    validation_message += "Der skal indtastes et gydligt brugernavn \n";
}


// Tjekker at alder er mellem 13 og 99
if (newAge < 13) {
    form_valid = true;
    validation_message += "Du skal være over 13 år for at oprette en bruger \n"; }

// Tjekker at brugeren har valgt en af de givne byer
    var newLocation = false;
    if (newLocation != "") {
        newLocation = true;
    } else {
        validation_message += "Lokalitet skal vælges \n";
        form_valid = false;
    }

if (form_valid) {
    alert("Hej " + newUsername
    + "\nNewAge: " + newAge
    + "\nNewLocation: " + newLocation
    );
} else {alert(validation_message);}

return (form_valid);
};



//Validering af form (Celina)

//Tjek at der overhoved er indtastet værdier (alert)
//Tjek at by er valgt i drop-down (og ikke bare byer)
//Tjek at alder er mellem 13 og 99 (alert)
//Tjek at password minimum er 6 tegn (alert)
//Tjek at brugernavn ikke eksisterer i database (alert)