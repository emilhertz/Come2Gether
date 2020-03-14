// User-klasse
class Users {
    constructor(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
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
    set Password (newPassword) {
        this.password = newPassword;
    }
}