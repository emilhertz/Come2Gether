class JoinUser extends SuperUser {
    constructor(username, Categories, pastJoinedEvents) {
        super(username);
        this._Categories = Categories;
        this._pastJoinedEvents = pastJoinedEvents;
}

    present () {
        return "Du har deltaget i " + this._pastJoinedEvents
    }




participateEvent = function () {

    
}
    function participateEvent(eventName) {
        this._eventName = eventName;
            return "Du har tilmeldt dig " + this._eventName;
        }

    function leaveEvent(leaveEvent) {
        this._leaveEvent = leaveEvent;
        return "Du er nu frameldt " + this._leaveEvent;
        }
}
