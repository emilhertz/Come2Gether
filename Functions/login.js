// If-statement der ser om localstorage med key: listOfUsers er tom. Hvis det er tilfældet bliver hard-codede brugere tilknyttet som en string
if (localStorage.getItem("storedListOfUsers") == null) {
    var listOfUsers = [];
    listOfUsers.push(new Users("Thorn","password","32","København","Fodbold for nybegyndere","Vinsmagning"));
    listOfUsers.push(new Users("Peter","Kanin","224","Eventyrskoven","Kaninfodring","Kaninræs"));

    var listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
} else {
    // localStorage med key: "storedListOfUsers" er ikke tomt, og den data hentes og gøres til objekter i array'et listOfUsers
    var listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));
}

//Denne funktion aktiveres når submit-knap med id="login" trykkes på login.html
var loginButton = document.getElementById("login");
loginButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    //Henter information fra login-side
    var username = document.getElementById("loginUsername");  
    var password = document.getElementById("loginPassword");

    //for-loop der tjekker om indtastede værdier stemmer overens med listOfUsers-array, som er lagret i localStorage
    for (i=0; i < listOfUsers.length; i++){
        if (username.value === listOfUsers[i].username && password.value === listOfUsers[i].password) {
            //  Gemmer bruger som logger ind i localStorage og som string
            var signedIn = JSON.stringify(listOfUsers[i]);
            localStorage.setItem("signedIn", signedIn);
            // Sæt login_status til true
            localStorage.setItem("login_status", "true");
            // Åbner home.html
            window.open("../HTML/home.html", "_self");
            return
        }
    }
    alert("Forkert brugernavn eller password :(")
};