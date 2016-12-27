var Modularis = require('../../../index');

class AddCommand extends Modularis.Command{
	constructor(client){
		super(client, {
			name: 'multiply',
			usage: 'Multiply numbers',
			group: 'math',
			params: [
					  {
					  	name: 'numbers',
						  type: 'array'
					  }
			]
		});
	}

	run(msg, params){
		msg.channel.sendMessage(params.numbers.reduce((a,b) => a * parseInt(b)))
	}
}
module.exports = AddCommand;
