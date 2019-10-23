// If-statement der ser om localstorage med key: listOfUsers er tom. Hvis det er tilfældet bliver hard-codede brugere tilknyttet som en string
if (localStorage.getItem("storedListOfUsers") == null) {
    var listOfUsers = [];
    listOfUsers.push(new Users("Thorn","password","32","København","Fodbold for nybegyndere","Vinsmagning"));
    listOfUsers.push(new Users("Peter","Kanin","224","Eventyrskoven","Kaninfodring","Kaninræs"));

    //listOfUsers stringifies, så de kan tilknyttes localStorage
    var listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
} else {
    // localStorage med key: "storedListOfUsers" er ikke tomt, og den data hentes og gøres til objekter i array'et listOfUsers
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
}