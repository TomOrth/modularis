'use strict';
class Event{
    /**
     * @param {ModularisCommand} client - client the command is for
     * @param {String} event - the event that triggers this listener
     */
    constructor(client, event){
        if(!client) throw new Error('A client is needed');
        if(!event) throw new Error('An event is needed');
        /**
		 * The client to register for
		 * @name Event#client
		 * @type {ModularisClient}
		 * @readonly
		 */
		Object.defineProperty(this, 'client', {value: client});

        /**
         * The event that triggers this
         * @type {String}
         */
        this.event = event;
    }
    /**
     * Method that gets invoked when the event is triggered
     * @param{Role|Message|Guild|Channel} arg - Data object the triggered event creates (if any)
     */
    run(arg){
        throw new Error(`The event ${this.event} requires a run method`);
    }

}
module.exports = Event;