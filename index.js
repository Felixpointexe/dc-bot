const Discord = require('discord.js');

const client = new Discord.Client();






 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    client.on('message', message => {	client.on('message', message => {


    if (message.content === 'ping') {	    let tokens = msg.content.split(" ");


       message.reply('pong');	    if(tokens[0] === '/ping') {
        const r = Math.floor(Math.random() * replies.length);
        message.reply(replies[r]);


       }	    }
    if (message.content === 'hs') {	


       message.reply('selber');	    if(tokens[0] === '/gif'){


       }


  

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
