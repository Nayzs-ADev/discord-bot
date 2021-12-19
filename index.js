const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
var prefix = config.prefix;

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

//Status Personalisé
client.on("ready", () => {
    function randomStatus() {
      let status = ["A - Développement", "Dev base NAYZS V1"]
      let rstatus = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[rstatus], {type: "PLAYING", url: "https://dsc.gg/n-adev"});
  }; setInterval(randomStatus, 2000)
});

// C1 - Bienvenue Embed
client.on("guildMemberAdd", member => {
    let embed = new Discord.RichEmbed ()
        .setTitle("Bienvenue !")
        .setDescription("**Oh !**" + member.user + "*__viens de rejoindre le discord A - Développement .__*\n\n**Je te souhaite un agréable moment sur le serveur**. Et au passage ,\n`Joyeux Noël !`\n\nNous sommes maintenant : " + member.guild.memberCount + " *__membres__*")
        .setFooter("A - Développement")
        .setColor("8000E5")
        .setImage("https://cdn.discordapp.com/attachments/920706913056997476/920716086796767262/banniere_bienvenue.png")
        .setTimestamp()
        member.guild.channels.get('840671161305137165').sendMessage(embed)
});

client.login(process.env.TOKEN);


client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonjour"){
      message.reply('Bonjour à toi !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonsoir"){
      message.reply('Bonsoir à toi !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "salut"){
      message.reply('Salutation à toi !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ca va"){
      message.reply('Bien et vous ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "comment ca va"){
      message.reply('Bien et vous ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bien"){
      message.reply('OK !')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "yo"){
      message.reply('Yo !')
    }
  })
  
  
  //// insulte
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "tg"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ta gueule"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ta geule"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ntm"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "fdp"){
      message.reply('**__Attention les gros mots !!!__**')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "nique ta mere"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ta mere"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "fils de pute"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ta grand-mere"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ta grand mere"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ta grand-mère"){
      message.reply("**__Attention les gros mots !!!__**")
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ftg"){
      message.reply('**__Attention les gros mots !!!__**')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ma pute"){
      message.reply('**__Attention les gros mots !!!__**')
    }
  })


const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaway.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#686868",
        reaction: "🎉"
    }
});
