const Modularis = require('../index');
const path = require('path');
var bot = new Modularis.Client({
    prefix: '!',
    token: '<token>',
    commandPath: path.join(__dirname, '/commands/'),
    delimiter: ','
});

bot.on('ready', () => console.log(bot.user.username + " is online"));
bot.register
    .registerGroups()
    .registerCommands();
bot.activate();
