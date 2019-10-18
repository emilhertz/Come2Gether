//Denne funktion henter listOfSuperUsers-array fra SuperUser.js

//Login-funktion, der aktiveres når submit-knap med id="login" trykkes
var loginButton = document.getElementById("login");
loginButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    //Henter information fra login-side
    var username = document.getElementById("loginUsername");  
    var password = document.getElementById("loginPassword");

    //for-loop der tjekker om indtastede værdier stemmer overens med array
    for (i=0; i<listOfSuperUsers.length; i++){
        if (username.value === listOfSuperUsers[i].username && password.value === listOfSuperUsers[i].password){
            console.log(username.value + " er logget ind!");
            return
        }
    }
    console.log("Forkert brugernavn eller password :(")
};