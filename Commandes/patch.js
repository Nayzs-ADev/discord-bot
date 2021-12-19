const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(cient, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.colour)
	.setTitle('<:new:855545116961406976>・Nouveautés.')
	.setURL('')
	.setAuthor(config.Pseudo, config.IImage, 'https://bit.ly/nayzs_')
	.setThumbnail(config.IImage)
	.addFields(
  	{ name: '<a:droitefleche:851560701839015956> LSPD & EMS', value: config.JOBS },
  	{ name: '───────────────────────────────────', value: config.JOBSS },
  	)

  .setTimestamp()
  .setFooter(config.Pseudo, config.IImage);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
	name:"news"
}