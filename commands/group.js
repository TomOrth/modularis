class CommandGroup{
	/** @param {String} [name] - Group name */
	constructor(name){
		Object.defineProperty(this, 'name', {value: name});
	}

	module.exports = CommandGroup
}
