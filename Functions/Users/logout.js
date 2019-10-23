//Log-ud funktion
function logout() {
    localStorage.removeItem("signedIn");
    localStorage.setItem("login_status", "false");
    window.open("../HTML/home.html", "_self")
}

// Skjul login-knap
if (localStorage.getItem("login_status") === "true") {
    document.getElementById("login_button").style.visibility = "hidden";
}

// Skjul logout-knap
if (localStorage.getItem("login_status") !== "true") {
    document.getElementById("logout_button").style.visibility = "hidden";
}

// Skjul opret-event side når ingen bruger er logget ind
if (localStorage.getItem("login_status") !== "true") {
    document.getElementById("opret_event").style.visibility = "hidden";
}