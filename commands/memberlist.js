const Command = require("../base/Command.js");
const open = require("open");
const Discord = require("discord.js");

class MemberList extends Command {
    constructor(client) {
        super(client, {
            name: "Member List",
            description: "Export a list of members from discord server",
            category: "Clan",
            usage: "memberlist",
            guildOnly: true,
            aliases: [],
            permLevel: "Bot Support"
        });
    }

async run(message, args, level) {

///Returns a CSV file of all users on the server.
await client.request_offline_members(guild.message.server)
before = time.time()
nicknames = [m.display_name -> m in guild.message.server.members]
with open('temp.csv', mode='w', encoding='utf-8', newline='') as f:
writer = csv.writer(f, dialect='excel')
	for v in nicknames:
      writer.writerow([v])
      after = time.time()
await client.send_file(guild.message.author, 'temp.csv', filename='stats.csv', content="Here you go! Check your PM's. Generated in {:.4}ms.".format((after - before)*1000))

}
}

module.exports = MemberList; 