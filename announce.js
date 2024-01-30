const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
// ${gifArray[Math.floor(Math.random() * gifArray.length)]}
var gifArray = [
  `https://cdn.discordapp.com/attachments/1047948042285895680/1189939918009544874/ezgif.com-video-to-gif-converter_5.gif?ex=65b271e8&is=659ffce8&hm=af8cf2c03827024324d95b9f928749de5df3757b37edd0c10903a695520c5814&`,
  
];


module.exports = {
  name: "announce",
  aliases: ['ann'],
  description: "Announce Command",
  cooldown: 0,
  category: "utility",
  userPermissions: "MANAGE_MESSAGES",
  botPermissions: "MANAGE_MESSAGES",

  async execute(client, message, args, ee) {
    try {
      message.delete();
      let Content = args.join(" ");
      if (!Content)
        return message.reply({ embeds:[new MessageEmbed()
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setDescription(`Please Give Me Something To Announce!`)]});

      return message.channel.send({ embeds:[new MessageEmbed()
        .setColor(ee.color)
        .setTitle(`__ANNOUNCEMENT__`)
        .setThumbnail(message.guild.iconURL({
          dynamic: true
        }))
        .setFooter(`Announced By ${message.author.username}`, message.guild.iconURL({
          dynamic: true
        }))
        .setTimestamp()
        .setImage(`${gifArray[Math.floor(Math.random() * gifArray.length)]}`)
        .setDescription(`${Content}`)]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}; 