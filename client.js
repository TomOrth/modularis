const Discord = requrie('discord.js');
const CommandParser = require('./parser');
const CommandRegister = require('./register');
class Client extends Discord.Client{
	
	/**
	 * @typedef {Object} [ClientProps] - Client properties
	 * @property {String} [prefix] - bot's prefix
	 * @property {String} [token] - bot's token
	 */
	constructor(options){
		if(!options.prefix) throw new Error('Bot requires a prefix');
		if(!options.token) throw new Error('Bot requires a token');
		this.prefix = options.prefix;
		this.token = options.prefix;
		this.parser = new CommandParser();
		this.register = new CommandRegister();
	}

	this.on('message', m => this.parser.handleCommand(m, client));
	
	/**
	 * Logs bot in using the bot's token
	 */
	activate(){
		this.login(this.token);
	}
}
