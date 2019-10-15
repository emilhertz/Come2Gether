//Denne  funktion er ikke færdig, men virker i praksis
//user array(nested) - database der indeholder username og password
var user = [];
user.push(new SuperUser("Peter", "Kanin"));

//for-loop, der går gennem user-array og tjekker om username eksisterer, og om password stemmer overens.
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

//Funktion der kan tilføje og slette brugere (push-pop nested array)
function createUser() {
    console.log("virker")
}

function testUser() {
    user.push({username: "test", password: "tester"});
}

function testUser2() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    user.push({username: username.value, password: password.value})
}

function showUser(){
  console.log(user)
};