// User-klasse
class Users {
    constructor(username, password, age, location) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location;
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
    set Password (newPassword) {
        this.password = newPassword;
    }
}