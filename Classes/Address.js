class Address {
    constructor(street, streetNumber, zipCode, city, country, eventName) {
        this._street = street;
        this._streetnumber = streetNumber;
        this._zipCode = zipCode;
        this._city = city;
        this._country = country;
        this._eventName = eventName;
    }
}

//denne klasse bliver lige sat lidt på pause

    // Array der bruges til login-process

    let listOfAddress = [];

// Hardcodede værdier til array
    listOfAddress.push(new Address("Amalienborg Slotsplads", "5","1257", "København K","Danmark","Fælles madlavning"));
    listOfAddress.push(new Address("Per Henrik Lings Allé", "2", "2100", "København","Danmark", "Motionsfodbold"));
    listOfAddress.push(new Address("Kongens Nytorv","1", "1050", "København K", "Danmark", "Kulturnat"));
    listOfAddress.push(new Address("Gothersgade", "108", "1123","København","Danmark","Pubcrawl"));
    listOfAddress.push(new Address("Hannemanns Allé","18-20","2300","København","Danmark","Koncert med Khalid"))


// Liste af login i konsol
    console.log(listOfAddress);


    /* ved ikke om nedenstående function stadigvæk er relevant
    function setAddress(this._street, this._streetnumber, this._zipCode, this._city, this._country) {
        return this._street + " " + this._streetnumber + ", " + this._zipCode + " " + this._city ", " + this._country ".";
*/
}
// hello
}
