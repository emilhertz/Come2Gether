//Log-ud funktion
function logout() {
    localStorage.removeItem("signedIn");
    window.open("../HTML/home.html", "_self")
}

// Skjul login-knap når bruger er logget ind
if (localStorage.getItem("signedIn") !== null) {
    document.getElementById("login_button").style.visibility = "hidden";
}

// Skjul logout-knap når ingen bruger er logget ind
if (localStorage.getItem("signedIn") === null) {
    document.getElementById("logout_button").style.visibility = "hidden";
}

// Skjul opret-event side når ingen bruger er logget ind
if (localStorage.getItem("signedIn") === null) {
    document.getElementById("opret_event").style.visibility = "hidden";
}