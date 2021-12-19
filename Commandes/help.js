const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#8000e5')
	.setTitle('<:help:921101639211970600>・Liste des commandes.')
	.setDescription('@everyone')
	.setURL('')
	.setAuthor(config.Speudo, config.Image, 'https://dsc.gg/n-adev')
	.setThumbnail(config.Image)
	.addFields(
    { name: '<:gooda:921822734126841876> | adev.liens', value: '__(En maintenance.)__' }, //Pour voir les liens me concernant.
    { name: '<:gooda:921822734126841876> | adev.pdp', value: '__(Afficher sa photo de profil.ex : @UserName)__' },
    { name: '<:gooda:921822734126841876> | adev.crea', value: '__(Voir la date de création de son compte discord.)__' },
    { name: '<:gooda:921822734126841876> | adev.meteo', value: '__(En maintenance.)__' }, //Pour afficher la météo
//    { name: '<:gooda:921822734126841876> | €giveaway', value: '__(Pour faire un giveaway)__' },
//    { name: '<:gooda:921822734126841876> | €sondage', value: '__(Pour faire un sondage.)__' },
    { name: '<:gooda:921822734126841876> | adev.ibot', value: '__(Information concernant le bot.)__' }, 
//    { name: '<:gooda:921822734126841876> | €modo', value: '__(Liste des commandes de modération.)__' },
//    { name: '<:gooda:921822734126841876> | €basev1', value: '__(Sert à regarder les informations sur la base.)__'},
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help"
}