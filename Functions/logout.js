//Log-ud funktion
function logout() {
    localStorage.removeItem("username");
    localStorage.setItem("login_status", "false");
    window.open("../HTML/home.html", "_self")
}