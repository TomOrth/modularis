'use strict';

const Discord = require('discord.js');

class Command{
	/**
	 * @typedef {Object} CommandOptions
	 * @property {String} name - Name of the command (must match command file name)
	 * @property {String} usage - Usage of how to use the command
	 * @property {String} group - Group name that the command belongs to
	 * @property {Object} params - Command's parameters
	 *
	 * @param {ModularisCommand} client - client the command is for
	 * @param {CommandOptions} options - options for this command
	 */
	constructor(client, options){
		if(!client) throw new Error('A client is needed');
		if(!options.name) throw new Error('Command must have a name');
		if(!options.group) throw new Error('Command must have a group name associated with it');

		/**
		 * The client to register for
		 * @name CommandRegister#client
		 * @type {ModularisClient}
		 * @readonly
		 */
		Object.defineProperty(this, 'client', {value: client});

		this.name = options.name;
		this.usage = options.usage || '';
		this.groupName = options.group;
		this.params = options.params || '';
	}
	/**
	*Command's main action
	*@param {Message} msg - Message the command was sent in
	*@param {Object} args - Command parameters
	*/
	run(msg, params){
		throw new Error(`The command ${this.name} does not have a run method`);
	}
}
module.exports = Command;
