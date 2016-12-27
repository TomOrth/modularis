var Modularis = require('../index');
var path = require('path');
var bot = new Modularis.Client({
    prefix: '!',
    token: 'MjYzMTA5OTQ4NjY4Mzc5MTM2.C0NPww.pIMixDnTMUWET4fK9OSymf1yNMg',
    commandPath: path.join(__dirname, '/commands/'),
    delimiter: ','
});

bot.on('ready', () => console.log(bot.user.username + " is online"));
bot.register
    .registerGroups()
    .registerCommands();
bot.activate();
