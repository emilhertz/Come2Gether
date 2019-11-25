// User-klasse
class Users {
    constructor(username, password, age, location, hostedEvents) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location;
        this.hostedEvents = hostedEvents;
    };
    get Username () {
        return this.username;
    }
    get Password () {
        return this.password;
    }
    get Age () {
        return this.age;
    }
    get Location () {
        return this.location;
    }
    get HostedEvents () {
        return this.hostedEvents;
    }
    set Password (newPassword) {
        this.password = newPassword;
    }
    //Implmenter slet bruger metode (minSide.html)
}