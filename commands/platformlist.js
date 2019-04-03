const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Platform extends Command {
    constructor(client) {
        super(client, {
            name: "platformlist",
            description: "view a count of members by platform",
            category: "Clan",
            usage: "platformlist",
            guildOnly: true,
            aliases: [],
            permLevel: "User"
        });
    }

async run(message, args, level) {

	//let playstation = "370195805610573824";
	let playstation = "537927917246611456";
	let playstationmembers = message.guild.roles.get(playstation).members;

	//let xbox = "365412296945565706";
	let xbox = "526538110390108190";
	let xboxmembers = message.guild.roles.get(xbox).members;

	//let pc = "375993110846636033";
	let pc = "522876007896711188";
	let pcmembers = message.guild.roles.get(pc).members;

  let channel = message.channel;

  let embed1 = new Discord.RichEmbed()
  .setAuthor('Player Platforms Information')
  .setThumbnail('https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/playstation-512.png')
  .addField('Playstation Members', `We have ${playstationmembers.size} with the @PS4 role.`, true)

  let embed2 = new Discord.RichEmbed()
  .setAuthor('XBox Divisions')
  .setThumbnail('https://cdn4.iconfinder.com/data/icons/materia-social-free/24/038_025_xbox_game_network_android_material-512.png')
  .addField('XBox Members', `We have ${playstationmembers.size} with the @XBOX role.`, true)

  let embed3 = new Discord.RichEmbed()
  .setAuthor('PC Divisions')
  .setThumbnail('https://cdn3.iconfinder.com/data/icons/picons-social/57/72-windows8-512.png')
  .addField('PC Members', `We have ${pcmembers.size} with the @PC role`, true);

  channel.send(embed1)
  .then(msg => {
      // after the first is sent, send the 2nd (makes sure it's in the correct order)
      channel.send(embed2);
  }).then(msg => {
      // after the second is sent, send the 3rd (makes sure it's in the correct order)
      channel.send(embed3);
  });
}
}

module.exports = Platform;
