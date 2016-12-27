'use strict';

class CommandParser {
    /**
     *Parse messages for commands
     *@param {ModularisClient} client - Bot Client
     */
    constructor(client) {
            if (!client) throw new Error('Parser requires a client');

						/**
		         * The client to register for
		         * @name CommandRegister#client
		         * @type {ModularisClient}
		         * @readonly
		         */
		        Object.defineProperty(this, 'client', {value: client});
        }
    /**
      *Handles parsed messages
      *@param {Message} m - Message being parsed
      *@param {String} d - delimiter used to seperate multiple command parameters
      */
    handleCommand(m, d) {
        if(m.author.bot) return;
        let cmdName = m.content.indexOf(' ') != -1 ? m.content.substring(m.content.indexOf(this.client.prefix) + 1, m.content.indexOf(' ')) : m.content.substring(m.content.indexOf(this.client.prefix) + 1);
        let content = m.content.indexOf(d) != -1 ? m.content.substring(m.content.indexOf(' ') + 1).split(d) : [m.content.substring(m.content.indexOf(' ') + 1)];
        let cmd = this.client.register.commands.find('name', cmdName);
        let params = [];
        if (cmd) {
            if (cmd.params) {
                var msgParams = cmd.params;
                msgParams.forEach(p => {
                    if (content != '') {
                        params[p.name] = p.type == 'array' ? content : content.shift();
                        content = p.type == 'array' ? '' : content;
                    }
                });
            }
            cmd.run(m, params);
        }
    }
}
module.exports = CommandParser;
