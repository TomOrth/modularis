'use strict';

const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
class CommandRegister {

    /**@param {ModularisClient} client - Bot Client */
    constructor(client, commandPath, eventsPath) {
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
         * @type {Collection<String, String>}
         */
        this.groups = new Discord.Collection();

        /**
         * Registered events
         * @type {Collection<String,Event>}
         */
        this.events = new Discord.Collection();

        /*
         * Path to commands
         * @type {String}
         */
        this.commandPath = commandPath;

        /**
         * Path to events
         * @type {Command}
         */
        this.eventsPath = eventsPath || '';
    }

    /**
     * Registers all Command groups
     * @return {CommandRegister}
     */
    registerGroups() {
        let cmdGroups = fs.readdirSync(this.commandPath);
        cmdGroups.forEach(e => this.groups.set(e, path.join(this.commandPath, e)));
        return this;
    }

    /**
     * Registers all Commands
     * @return {CommandRegister}
     */
    registerCommands() {
        this.groups.forEach(e => fs.readdirSync(e).forEach(c => {
            let Command = require(path.join(e, '/', c.slice(0, -3)));
            let cmd = new Command(this.client);
            this.commands.set(cmd.name, cmd);
        }));
        return this;
    }
    /**
     * Registers all events
     * @return {CommandRegister}
     */
    registerEvents(){
        if(this.eventsPath){
            let eventsGroup = fs.readdirSync(this.eventsPath);
            eventsGroup.forEach(e => {
                let Event = require(path.join(this.eventsPath, e))
                let evnt = new Event(this.client);
                this.events.set(evnt.event, evnt);
            });
            this.client.parser.handleEvents();
        }

    }
}

module.exports = CommandRegister;
