const Modularis = require('../index');
const path = require('path');
var bot = new Modularis.Client({
    prefix: '!',
    token: '<token>',
    commandPath: path.join(__dirname, '/commands/'),
    eventsPath: path.join(__dirname, '/events/'),
    delimiter: ',',
    selfbot: false
});

bot.register
   .registerGroups()
   .registerCommands()
   .registerEvents();
bot.activate();
