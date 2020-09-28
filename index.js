const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log('Bot telah aktif');
	
})

bot.login("#TOKENBOT");
