// User-klasse
class Users {
    constructor(username, password, age, location, pastJoinedEvents, pastHostedEvents) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location;
        this.pastJoinedEvents = pastJoinedEvents;
        this.pastHostedEvents = pastHostedEvents;
    }
}

// Array der bruges til login-process
//let listOfUsers = [];

// Hardcodede værdier til array
//listOfUsers.push(new User("Thorn", "Password", 32, "København","Ingen", "Ingen"));
//listOfUsers.push(new User("Thomas", "Tog", 90, "Togskinnerne", "Ingen", "Ingen"));
//listOfUsers.push(new User("Peter", "Kanin", 300, "Hareskoven", "Ingen", "Ingen"));

// Liste af login i konsol
//console.log(listOfUsers);