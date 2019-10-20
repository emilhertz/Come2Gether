//Opret bruger funktion, som så skal gemmes i localStorage sammen med eksisterende brugere
function createUser() {
    //Gemmer informationer fra ny bruger i objekt newUser
    newUser = new Users("document.getElementById('username')","doc");

    //Henter storedListOfUsers i localStorage og "parser" til array, hvor newUsers "pushes"
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
    listOfUsers.push(newUser);
    //listOfUsers stringifies og sættes som den nye værdi i localStorage
    var listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
}