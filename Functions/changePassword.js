//Forslag til fremgangsmåde

//lav et if-statement der ser om en bruger har indtastet sit gamle password rigtigt (du får det gamle password ved at skrive signedIn.password)

//Hvis ja, kald signedIn.newPassword(detNyePassword)

//Hvis nej, giv alert


//gammel kode
/*var changePasswordButton = document.getElementById("changePassword");
changePasswordButton.onclick = function (p) {

    p.preventDefault();

    var oldPassword = document.getElementById(oldPassword);
    var newPassword = document.getElementById(newPassword);
    var repeatNewPassword = document.getElementById(repeatNewPassword);



    // Validerings form - virker ikke
    var approvedInput = true;
    var errorMessage = "";

    //Ser om gammelt password er korrekt - virker ikke
    if (oldPassword != listOfUsers) {
        approvedInput = false;
        errorMessage += "Indtastede password stemmer ikke overens med password gemt i databasen \n";

    }

    if (newPassword.length <= 5) {
      approvedInput = false;
      errorMessage += "Dit nye passwprd skal bestå a mindst 6 tegn \n";
   }
    if (newPassword != repeatNewPassword) {
        approvedInput = false;
        errorMessage += "Dit nye password stemmer ikke overens med det du har skrevet i gentag nyt password \n";
    }

    if (approvedInput) {
        listOfUsers.push(User(newPassword));

        var listOfIUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfIUsersString);

        alert(UserName + "har nu skiftet password");
    } else { alert(errorMessage);}
}
*/