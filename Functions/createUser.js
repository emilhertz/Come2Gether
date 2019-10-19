var createButton = document.getElementById("opretBruger");
createButton.onclick = function (e) {
    //preventDefault forhindrer opdatering af konsol
    e.preventDefault();

    // Opret bruger funktion, som så skal gemmes i localStorage sammen med eksisterende brugere