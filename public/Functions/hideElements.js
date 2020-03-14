//if-statements i global-scope, så de er tilgængelige i flere dokumenter
// Skjuler login-knap når bruger er logget ind
if (signedIn != null) {
    document.getElementById("login_button").style.visibility = "hidden";
}

// Skjuler logout-knap når ingen bruger er logget ind
if (signedIn == null) {
    document.getElementById("logout_button").style.visibility = "hidden";
}

// Skjuler opret-event side når ingen bruger er logget ind
if (signedIn == null) {
    document.getElementById("only_login").style.visibility = "hidden";
}