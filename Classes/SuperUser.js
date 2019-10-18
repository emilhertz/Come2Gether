class SuperUser {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

// Array der bruges til login-process
let listOfSuperUsers = [];

// Hardcodede værdier til array
listOfSuperUsers.push(new SuperUser("Thorn", "password"));
listOfSuperUsers.push(new SuperUser("Thomas", "Tog"));
listOfSuperUsers.push(new SuperUser("Peter", "Kanin"));

// Liste af login i konsol
console.log(listOfSuperUsers);