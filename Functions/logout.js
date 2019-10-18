//Log-ud funktion
function logout() {
    localStorage.removeItem("username");
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