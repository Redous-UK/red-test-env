const Command = require("../base/Command.js");

class Guess extends Command {
    constructor(client) {
        super(client, {
            name: "Guess the Number",
            description: "Fortune Cookie!",
            category: "Games",
            usage: "guess <number>",
            guildOnly: true,
            aliases: [],
            permLevel: "User"
        });
    }
  
    async run(message, args, level) {

	let number = Math.floor((Math.Random() * 101) - 1);
	
	if(!args[1]) {
		return message.channel.send(`Sorry, you did not put a valid number for the game!`);
	}
	
	if(isNaN(args[1])) {
		return message.channel.send(`Sorry, you need to put a valid number!`);
	}
	
	message.channel.send(`${message.author.username}, you were ` + eval(number + args[1]) + ` away!`)
		
    }
}

module.exports = Guess;