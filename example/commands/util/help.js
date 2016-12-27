const Modularis = require('../../../index');

class HelpCommand extends Modularis.Command{
	constructor(client){
		super(client, {
			name: 'help',
			group: 'util',
			usage: 'help <command> gives a single command\'s usage, help alone gives a general help message',
			params: [
					  {
					  	name: 'command',
						type: 'String',
						desc: 'Command you want info about'
					  }
			]
		});
	}

	run(msg, args){
		//TODO: Find a better way to do this
		if(args.command != msg.content){
			console.log(`${args.command}  == ${msg.content}`);
			var cmd = this.client.register.commands.find('name', args.command);
			var msgText = !cmd ? 'That is not a valid command' : `Command: ${cmd.name}, Group: ${cmd.groupName}, Usage: ${cmd.usage}`;
			msg.channel.sendMessage(msgText);
		}
		else{
			var msgTextBig = '';
			this.client.register.commands.forEach(cmd => {
				msgTextBig += `Group: ${cmd.groupName}, Command: ${cmd.name}, Usage: ${cmd.usage}\n`;
				msgTextBig += cmd.params ? `**Params:**\n` : '\n';
				if(cmd.params) cmd.params.forEach(p => msgTextBig += `Name: ${p.name}, description: ${p.desc}\n`);
				msgTextBig += cmd.params ?  '\n' : '';
			});
			msg.channel.sendMessage(msgTextBig);
		}
	}
}
module.exports = HelpCommand;
