//Denne  funktion er ikke færdig, men virker i praksis
//user array(nested) - database der indeholder username og password
var user = [
    {
        username: "peter",
        password: "kanin"
    },
    {
        username: "thomas",
        password: "tog"
    },
    {
        username: "jens",
        password: "ole"
    }
    ];

//for-loop, der går gennem user-array og tjekker om username eksisterer, og om password stemmer overens.
var submitButton = document.getElementById("submit")
submitButton.onclick = function (e) {
    //Funktion der forhindrer opdatering af konsol
    e.preventDefault()

    //Henter information fra login-side
    var username = document.getElementById("loginUsername");
    var password = document.getElementById("loginPassword");

    for (i=0; i<user.length; i++){
        if (username.value === user[i].username && password.value === user[i].password){
            console.log(username.value + " er logget ind!")
            return
        }
    }
    console.log("Forkert brugernavn eller password :(")

}

//Lav funktion der kan tilføje og slette brugere (push-pop nested array)