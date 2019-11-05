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
    var validation_message = "";

    //Ser om username er tomt, for kort, eller eksisterer i database
    if (newUsername === "") {
        form_valid = false;
        validation_message += "Du skal indtaste et brugernavn! \n";
    }

    //Ser om længde på username passer
    if (newUsername.length <= 3) {
        form_valid = false;
        validation_message += "Brugernavnet skal mindst være 4 tegn! \n";
    }

    //Henter storedListOfUsers i localStorage og "parser" til array
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));

    //for-loop der ser om brugernavn i forvejen bliver brugt
    for (i=0; i<listOfUsers.length; i++) {
        if (newUsername === listOfUsers[i].username) {
            form_valid = false;
            validation_message += "Brugernavnet eksisterer allerede :( \nVælg venligst et andet. (se localStorage) \n";
        }
    }

    //Ser om alderen er et tal mellem 13 og 99
    if (newAge < 13 || newAge > 99) {
        form_valid = false;
        validation_message += "Du skal være over 13 år for at oprette en bruger \n";
    }

    //Ser om passqord er udfyldt og om det er for kort (skal minimum være 6 tegn)
    if (newPassword.length <= 5) {
        form_valid = false;
        validation_message += "Password skal minimum bestå af 6 tegn \n";
    }

    //Ser om lokalitet er valgt
    if (newLocation === "Byer") {
        form_valid = false;
        validation_message += "Vælg venligst en by! \n";
    }

    //Opretter bruger ved true form_valid
    if (form_valid) {
        //Ny bruger "pushes" til listOfUsers array hentet længere oppe
        listOfUsers.push(new Users(newUsername, newPassword, newAge, newLocation, "", ""));

        //listOfUsers stringifies og overskriver storedListOfUsers localStorage
        var listOfUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfUsersString);

        //Giver besked om ny bruger er oprettet
        alert(newUsername + " er nu oprette som bruger!");

        //Åbner home.html når bruger er oprettet
        window.open("../HTML/home.html", "_self");
    } else { alert(validation_message);}
}