const Discord = require('discord.js');

class Command{
	/**
	 * @typedef {Object} CommandOptions - Options/Values of the command
	 * @property {String} [name] - Name of the command (must match command file name)
	 * @property {String} [usage] - Usage of how to use the command
	 * @property {String} [group] - Group name that the command belongs to
	 * @property {Object} [params] - Command's parameters
	 *
	 * @param {ModularisCommand} [client] - client the command is for
	 * @param {CommandOptions} [options] - options for this command
	 */
	constructor(client, options){	
		if(!client) throw new Error('A client is needed');
		if(!options.name) throw new Error('Command must have a name');
		if(!options.usage) throw new Error('Command must have a usage guid');
		if(!options.group) throw new Error('Command must have a group name associated with it');
		if(!options.params) throw new Error('Command must have a list of params');
		Object.defineProperty(this, 'client', {value: client});

		this.name = options.name;
		this.usage = options.usage;
		this.groupName = options.group;
		this.params = options.params;
	}

	async run(msg, args){
		throw new Error(`The command ${this.name} does not have a run method`);
	}
}
