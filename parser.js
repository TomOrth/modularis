
class CommandParser{
	async handleCommand(m, client, d){
		let content = m.content.split(d);
		let cmdName = content.shift().substring(cmd.indexOf(client.prefix) + 1);
        let cmd = new client.register.commands.find('name', cmdName);
		let args = [];
		
	}
}
