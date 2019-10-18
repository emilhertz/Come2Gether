//Denne funktion henter listOfSuperUsers-array fra User.jsogin-funktion, der aktiveres når submit-knap med id="login" trykkes
var loginButton = document.getElementById("login");
loginButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    //Henter information fra login-side
    var username = document.getElementById("loginUsername");  
    var password = document.getElementById("loginPassword");

    //for-loop der tjekker om indtastede værdier stemmer overens med array
    for (i=0; i<listOfUsers.length; i++){
        if (username.value === listOfUsers[i].username && password.value === listOfUsers[i].password){
            //  Gem username i localstorage
            localStorage.setItem("username", username.value);
            // (i fremtiden) Sæt login_status til true
            // Åbner home.html
            window.open("../HTML/home.html", "_self")
            return
        }
    }
    alert("Forkert brugernavn eller password :(")
};