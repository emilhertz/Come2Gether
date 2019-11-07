class Events {
    //Klassens variabler
    constructor(eventName, eventLocation, Category, eventTime, eventDescription, eventCapacity, eventHost, eventParticipants) {
        this.eventName = eventName;
        this.eventLocation = eventLocation;
        this.Category = Category;
        this.eventTime = eventTime;
        this.eventDescription = eventDescription;
        this.eventCapacity = eventCapacity;
        this.eventHost = eventHost;
        this.eventParticipants = eventParticipants;
    }

    //Metode der skal sikre at event har kapacitet hvis en bruger ønsker at deltage
    //Virker ikke
    remainingCapacity() {
        var remainingCapacity = this.eventCapacity.length - this.eventParticipants.length;
        var joinEvent = true;
        if (remainingCapacity > 0) {
            return remainingCapacity.length;
        } else {joinEvent = false;}
    }
}