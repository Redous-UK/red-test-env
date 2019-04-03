let presence = [];
    module.exports = class {
          constructor(client) {
            this.client = client;
          }

async run(member) {
  const Discord = require('discord.js');
  if ((member.presence['game'] !== null) && (member.presence['game'].url !== null))
  {
    console.log(member.presence['game'].url);
    if (!presence.includes(member.user.id))
    {
      member.guild.channels.get('561619112648900631').send(`Hey guys, ${member.user.username} is now live, go check them out! ${member.presence['game'].url}`);
      presence.push(member.user.id);
      console.log(`User ${member.user.username} started streaming`)
    }
  } else {
    if (presence.length > 0)
    {
      if (presence.includes(member.user.id))
      {
        let pos = presence.indexOf(member.user.id);
        presence.splice(pos, 1);
        console.log(`User ${member.user.username} stopped streaming`)
      }
    }
  }
}
};
