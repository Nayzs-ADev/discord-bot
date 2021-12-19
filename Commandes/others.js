const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(cient, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('<:dvt2:874006159235907644>・Voici le formulaire pour les prises de vacances')
	.setURL('')
	.setAuthor(config.Speudo, config.Image, 'https://bit.ly/nayzs_')
	.setThumbnail(config.Image)
	.addFields(
  	{ name: 'Part le :', value: config.Parti },
  	{ name: 'Heure :', value: config.hours },
  	{ name: 'Rentre le :', value: config.Rentrer },
  	{ name: 'Heure :', value: config.hours2 },
  	{ name: 'Raison', value: config.Raison },
  	)

  .setTimestamp()
  .setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
	name:"psv"
}