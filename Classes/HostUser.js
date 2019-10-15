class HostUser extends SuperUser {
    costructor(username, pastHostedEvents) {
        super(username);
        this._pastHostedEvents = pastHostedEvents;
    }
    get pastHostedEvents() {
        return this._pastHostedEvents;
    }
}