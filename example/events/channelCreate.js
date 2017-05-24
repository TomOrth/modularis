const Modularis = require('../../index');

class ChannelCreateEvent extends Modularis.Event{
    constructor(client){
        super(client, 'channelCreate');
    }
    run(channel){
        console.log(`${channel.id} was just created just now`);
    }
}
module.exports = ChannelCreateEvent;
