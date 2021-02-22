const Discord = require('discord.js');

const client = new Discord.Client();

const fetch= require('node-fetch');

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', gotMessage );
 
async function gotMessage(message){ 
    let tokens = message.content.split(" ");

    if(tokens[0] === 'ping') {
        
        message.reply('pong');

    }

    
   
     if(tokens[0] === '/gif'){
      
        let keywords = 'starWars';
      
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=1O4OB5Z2JAMM&limit=8`;
        let response = await fetch(url);
        let json = await response.json();
       
       message.channel.send(json.results[0].url);
  
 }



}

 

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
