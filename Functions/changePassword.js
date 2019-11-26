//Forslag til fremgangsmåde

//lav et if-statement der ser om en bruger har indtastet sit gamle password rigtigt (du får det gamle password ved at skrive signedIn.password)

//Hvis ja, kald signedIn.newPassword(detNyePassword)

//Hvis nej, giv alert

function changePassword() {
    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let repeatNewPassword = document.getElementById("repeatNewPassword").value;

    if (oldPassword === signedIn.Password && newPassword === repeatNewPassword) {
        signedIn.Password = newPassword;
        let signedInString = JSON.stringify(signedIn);
        localStorage.setItem("signedIn", signedInString);
    } else {alert("Noget gik galt");}
}

//gammel kode
/*

}

/*

    // Validerings form - virker ikke
    let approvedInput = true;
    let errorMessage = "";

    //Ser om gammelt password er korrekt - virker ikke
    if (oldPassword != signedIn.password) {
        approvedInput = false;
        errorMessage += "Du har skrevet dit gamle password forkert";
    }

    if (newPassword.length < 5) {
      approvedInput = false;
      errorMessage += "Dit nye passwprd skal bestå a mindst 6 tegn \n";
   }
    if (newPassword != repeatNewPassword) {
        approvedInput = false;
        errorMessage += "Dit nye password stemmer ikke overens med det du har skrevet i gentag nyt password \n";
    }


    if (approvedInput) {
        signedIn.password = newPassword;
        alert(UserName + "har nu skiftet password");

    } else { alert(errorMessage);}
}
*/