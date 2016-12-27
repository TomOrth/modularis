const Modularis = require('../../../index');

class PingPong extends Modularis.Command{
	constructor(client){
		super(client, {
			name: 'ping',
			usage: 'ping pong',
			group: 'fun'
		});
	}

	run(msg, params){
		msg.channel.sendMessage('pong');
	}
}
module.exports = PingPong;
