var Modularis = require('../../../index');

class RepeatCommand extends Modularis.Command{
	constructor(client){
		super(client, {
			name: 'repeat',
			usage: 'Repeat whatever the user says',
			group: 'fun',
			params: [
					  {
					  	name: 'input',
						  type: 'String'
					  }
			]
		});
	}

	run(msg, params){
    console.log(params);
		msg.channel.sendMessage(params.input);
	}
}
module.exports = RepeatCommand;
