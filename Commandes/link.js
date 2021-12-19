const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('<:dvt2:874006159235907644>・Voici les liens me concernant.')
	.setURL('')
	.setAuthor(config.Speudo, config.Image, 'https://bit.ly/nayzs_')
	.setThumbnail(config.Image)
	.addFields(
    { name: '<a:fd:878236326938423356> Youtube', value: config.Youtube },
    { name: '<a:fd:878236326938423356> Twitch', value: config.Twitch },
    { name: '<a:fd:878236326938423356> Tiktok', value: config.Tiktok },
    { name: '<a:fd:878236326938423356> Instagram', value: config.Instagram },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"links"
}