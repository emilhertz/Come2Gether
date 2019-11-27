
//Funktion til at ændre password
//Først henter vi inputtene fra html formlen og laver dem til variabler vi kan kode med.
function changePassword() {
    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let repeatNewPassword = document.getElementById("repeatNewPassword").value;
// Opretter et aproved input som er true, så vi kan definere et if statment som enten true eller false
    // Derudover oprettes også en errormessage, som vi senere bruger til at alerte forskellige fejl
    let approvedInput = true;
    let errorMessage = "";

//Tjekker om oldPassword er ulig det password man har brugt til at logge ind
    if (oldPassword !== signedIn.password) {
        approvedInput = false;
        errorMessage += "Du har tastet dit gamle password forkert \n";
    }

    //Tjekker om det nye password er længere end 5 tegn
    if (newPassword.length <= 5) {
        approvedInput = false;
        errorMessage += "Dit nye password skal være mindst 6 cifre langt \n";
    }
    //Tjekker om det newPassword er ulig med repeatNewPassword
    if (newPassword !== repeatNewPassword) {
        approvedInput = false;
        errorMessage += "Dit nye password stemmer ikke overens med gentagelsen \n";
    }
//laver et if statment som kommer i spil når approvedInput er true
    /*Tjekker at oldPassword er lig med det man har brugt til at logge ind
    Derudover tjekkes der også efter om newPassword er lig med repeatNewPassword
    Hvis dette er tilfældet ændres signedIn Password til det nye password
    herefter bruges værktøjet stringify til at gøre signedinstring til en string
    der kan smides op i localstorage.
    Efter det er smidt i localstorage, alertes der endten en bekræftelse på at man
    har ændret password, hvis ikke alertes der en errormessage

     */
     if (approvedInput) {
         (oldPassword === signedIn.Password && newPassword === repeatNewPassword)
        {
            signedIn.Password = newPassword;
            let signedInString = JSON.stringify(signedIn);
            localStorage.setItem("signedIn", signedInString);
            { alert( "Du har nu skiftet password");}
        }}
    else { alert(errorMessage);}


}
