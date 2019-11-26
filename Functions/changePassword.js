//Forslag til fremgangsmåde

//lav et if-statement der ser om en bruger har indtastet sit gamle password rigtigt (du får det gamle password ved at skrive signedIn.password)

//Hvis ja, kald signedIn.newPassword(detNyePassword)

//Hvis nej, giv alert

function changePassword() {
    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let repeatNewPassword = document.getElementById("repeatNewPassword").value;

    let approvedInput = true;
    let errorMessage = "";


    if (oldPassword !== signedIn.password) {
        approvedInput = false;
        errorMessage += "Du har tastet dit gamle password forkert \n";}
    if (newPassword.length <= 5) {
        approvedInput = false;
        errorMessage += "Dit nye password skal være mindst 6 cifre langt \n";
    }
    if (newPassword !== repeatNewPassword) {
        approvedInput = false;
        errorMessage += "Dit nye password stemmer ikke overens med gentagelsen \n";
    }

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
