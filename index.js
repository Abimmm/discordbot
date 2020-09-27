const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log('Bot telah aktif');
bot.user.setActivity('@putribali.id', { type : 'WATCHING'}).catch(console.error);
	
})

bot.login("NzUzNTU3NjIwNjE0MzY1MjU2.X1n7OQ.gBcgR_RkEhZr7i6tQ939cIuCQGw");