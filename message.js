module.exports = class Message {
    constructor(type, event, data) {
        this.type = type;
        this.event = event;
        this.data = data;
    }
}