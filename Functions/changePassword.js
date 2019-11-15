var changePasswordButton = document.getElementById("changePassword");
changePasswordButton.onclick = function (p) {

    p.preventDefault();

    var oldPassword = document.getElementById(oldPassword);
    var newPassword = document.getElementById(newPassword);
    var repeatNewPassword = document.getElementById(repeatNewPassword);



    // Validerings form
    var approvedInput = true;
    var errorMessage = "";

    //Ser om gammelt password er korrekt
    if (oldPassword !== ) {
        approvedInput = false;
        errorMessage += "Indtastede password stemmer ikke overens med password gemt i databasen\n";

    }

    if (newPassword !== repeatNewPassword) {
        approvedInput = false;
        errorMessage += "Dit nye password stemmer ikke overens med det du har skrevet i gentag nyt password\n";
    }

    if (approvedInput) {
        listOfUsers.push(newPassword);

        var listOfIUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfIUsersString);

        alert(UserName + "har nu skiftet password");
    } else { alert(errorMessage);}
}
