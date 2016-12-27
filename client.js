'use strict';

const Discord = require('discord.js');
const CommandParser = require('./parser');
const CommandRegister = require('./register');
class Client extends Discord.Client {

    /**
     * @typedef {Object} ClientProps
     * @property {String} prefix - bot's prefix
     * @property {String} token - bot's token
     * @property {String} delimiter - the delimiter that seperates command parameters
     * @property {String} commandPath - path to commands
     *
     * @param {ClientProps} options - Client properties
     */
    constructor(options) {
        if (!options.prefix) throw new Error('Bot requires a prefix');
        if (!options.token) throw new Error('Bot requires a token');
        if (!options.delimiter) throw new Error('Bot requires a delimiter that seperates the command parameters');
        if (!options.commandPath) throw new Error('Bot requires a path to commands');
        super(options);
        this.prefix = options.prefix;
        this.token = options.token;
        this.delimiter = options.delimiter;
        this.commandPath = options.commandPath;
        this.register = new CommandRegister(this, this.commandPath);
        this.parser = new CommandParser(this);

        this.on('message', m => this.parser.handleCommand(m, ','));

    }

    /**
     * Logs bot in using it's token
     */
    activate() {
        this.login(this.token);
    }
}
module.exports = Client;
