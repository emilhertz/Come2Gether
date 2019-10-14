//Hent username og password fra html-form
this.username = document.getElementById("username");
this.password = document.getElementById("password");

//Gem input fra html-form i localstorage
function gemLogin() {
    //
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
}