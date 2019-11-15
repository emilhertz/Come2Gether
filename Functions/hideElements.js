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
    document.getElementById("opret_event").style.visibility = "hidden";
}

// Skjuler Min side når ingen bruger er logget ind
if (signedIn == null) {
    document.getElementById("min_side").style.visibility = "hidden";
}