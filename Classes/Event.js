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
    remainingCapacity(eventCapacity, eventParticipants) {
        if (eventCapacity.length - eventParticipants.length > 0) {
            var joinEvent  = true;
        } else {joinEvent = false;}
    }
}


