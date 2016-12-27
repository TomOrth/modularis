const Modularis = require('../../../index');

class AddCommand extends Modularis.Command{
	constructor(client){
		super(client, {
			name: 'multiply',
			usage: 'Multiply numbers',
			group: 'math',
			params: [
					  {
					  	name: 'numbers',
						type: 'array',
						desc: 'Group of numbers you want, seperated by ' + client.d
					  }
			]
		});
	}

	run(msg, params){
		msg.channel.sendMessage(params.numbers.reduce((a,b) => a * parseInt(b)))
	}
}
module.exports = AddCommand;
