const Modularis = require('../../index');

class ReadyEvent extends Modularis.Event{
    constructor(client){
        super(client, 'ready');
    }
    run(){
        console.log(`${this.client.user.username} is online`);
    }
}
module.exports = ReadyEvent;