const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Scrub extends Command {
    constructor(client) {
        super(client, {
            name: "scrub",
            description: "textual scrub",
            category: "Clan",
            usage: "scrub",
            guildOnly: true,
            aliases: [],
            permLevel: "User"
        });
    }

async run(message, args, level) {
    message.channel.send(`
    \`\`\`
    o__ __o                                         o
   /v     v\\                                       <|>
  />       <\\                                      / >
 _\\o____            __o__  \\o__ __o    o       o   \\o__ __o
      \\_\\__o__     />  \\    |     |>  <|>     <|>   |     v\\
            \\    o/        / \\   < >  < >     < >  / \\     <\\
  \\         /   <|         \\o/         |       |   \\o/      /
   o       o     \\\\         |          o       o    |      o
   <\\__ __/>      _\\o__</  / \\         <\\__ __/>   / \\  __/>
   \`\`\``);
};
}
module.exports = Scrub;
