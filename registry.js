const Discord = require('discord.js');
const path = require('path');

class CommandRegister{
	/**@param {ModularisClient} [client] - bot client */
	constructor(client){
		/**
		 * The client to register for
		 * @name CommandRegister#client
		 * @type {ModularisClient}
		 * @readonly
		 */
		Object.defineProperty(this, 'client', {value: client});

		/**
		 * Registered commands
		 * @type {Collection<String, Command>}
		 */
		this.commands = new Discord.Collection();

		/**
		 * Registered groups
		 * @type {Collection<String, Command>}
		 */
		this.groups = new Discord.Collection();
	}



	}
}
