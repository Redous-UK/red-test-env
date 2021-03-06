const Command = require("../base/Command.js");
const https = require('https');

class Roulette extends Command {
    constructor(client) {
        super(client, {
            name: "roulette",
            description: "A Russian Roulette game",
            category: "Games",
            usage: "roulette",
            guildOnly: true,
            aliases: [],
            permLevel: "User"
        });
    }

    async run(message, args, level) {
        https.get(`https://api.itslit.uk/games/roulette/${message.member.displayName}`, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                message.channel.send(data);
            });
        }).on("error", (err) => {
            message.channel.send(`It seems that something has gone wrong, <@131526937364529152> has been notified and is looking into it.`);
            message.guild.fetchMember('131526937364529152').then(user => {
                user.send(`A new error has occured in ${message.channel.name} caused by ${message.author.username}` +
                    ` using !${this.help.name} ${args}.\n The Error was ${err.message}`)
            });
        });
    }
}

module.exports = Roulette;