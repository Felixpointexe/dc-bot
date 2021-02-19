const Discord = require('discord.js');

const client = new Discord.Client();






 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    
    if (message.content === 'hs') {	


       message.reply('selber');	   


       }
 if (message.content === '/help') {	


       message.reply('ne du hs... ich sag es dir nicht');	   


       }


  

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
