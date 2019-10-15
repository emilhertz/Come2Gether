//Denne  funktion  virker i praksis, men kun de "hard-codede" SuperUser-objekter, virker på tværs af HTML-sider
//User-array bestående af objekter som er indstandser af SuperUser-klassen
    var user = [];
    user.push(new SuperUser("Peter", "Kanin"));
    user.push(new SuperUser("Thorn", "1234"));
    user.push(new SuperUser("Thomas", "Tog"));

//Login-funktion, der er et for-loop, der går gennem user-array og ser om indtastede værdier stemmer overens
var loginButton = document.getElementById("login");
loginButton.onclick = function (e) {
    //Funktion der forhindrer opdatering af konsol
    e.preventDefault();

    //Henter information fra login-side
    var username = document.getElementById("loginUsername");  
    var password = document.getElementById("loginPassword");

    for (i=0; i<user.length; i++){
        if (username.value === user[i].username && password.value === user[i].password){
            console.log(username.value + " er logget ind!");
            return
        }
    }
    console.log("Forkert brugernavn eller password :(")
};

//Funktion der kan tilføje brugere (push til user-array, som dog ikke gemmes nogen steder
function createUser() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

}

function showUser(){
  console.log(user)
};