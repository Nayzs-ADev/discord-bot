const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new Discord.MessageEmbed()
      .setColor('#8000e5')
      .setTitle('📈・Information concernant le bot !')
      .setURL('https://dsc.gg/n-adev')
      .setAuthor(config.Speudo, config.Image, 'https://dsc.gg/n-adev')
      .setThumbnail(config.Image)
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '04/11/2021', inline: true },
          { name: '⌨ | Développeur :', value: 'Nayzs#2535', inline: true },
      )
      .addField('Présence :', `${client.guilds.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(config.Speudo, config.Image);
  
  message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:"ibot"
}