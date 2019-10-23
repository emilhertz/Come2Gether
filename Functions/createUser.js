//Opret bruger funktion, som gemmer ny bruger i localStorage sammen med eksisterende brugere (push)
function createUser() {
    //Gemmer informationer fra ny bruger i objekt newUser
    var newUsername = document.getElementById("username").value;
    // var newPassword = document.getElementById("password");
    // newUser = new Users("newUsername", 'newPassword',"32", "København","","");

    localStorage.setItem("usernameTest", newUsername);
    //Henter storedListOfUsers i localStorage og "parser" til array, hvor newUsers "pushes"
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
    listOfUsers.push(new Users(newUsername));
    //listOfUsers stringifies og sættes som den nye værdi i localStorage
    var listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
}