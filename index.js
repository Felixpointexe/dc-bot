const Discord = require('discord.js');

const client = new Discord.Client();

const fetch= require('node-fetch');

client.on('ready', () => {

    console.log('I am ready!');
    console.log(`Logged in as ${client.user.tag}!`);
    
     client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: "/gif",  // The message shown
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
    

});

 

client.on('message', gotMessage );
 
async function gotMessage(message){ 
    let tokens = message.content.split(" ");

    if(tokens[0] === 'ping') {
        
        message.reply('pong');

    }

    
   
     if(tokens[0] === '/gif'){
         
        let keywords = 'nothing';
        if(tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");
        }
         
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=1O4OB5Z2JAMM&limit=8`;
        let response = await fetch(url);
        let json = await response.json();
       
       message.channel.send(json.results[0].url);
     }
    
    
    
    
    if(tokens[0] === '/update'){
       message.reply('status should now be updated');
     client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: "/gif",  // The message shown
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
        
    }
    
    if(tokens[0] === '/spam'){
        for ( x = 0; x < 30 ; x++){
       message.author.send("SPAM")
        }  
    }
    
    if(tokens[0] === '/invite'){
       message.author.send("click here to invite me to your server: https://discord.com/oauth2/authorize?client_id=811880872440627210&scope=bot");
        message.react('📩');
    }
    
    if(tokens[0] === '/vote'){
        let keywords = 'nothing';
        if(tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");
        }
  
        message.channel.send('_please vote for:_ **'+ keywords+'**').then(function(sentMessage) {
            sentMessage.react('👍').then(() => sentMessage.react('👎')).catch(() => console.error('emoji failed to react.'));
        });  
     }
    
    if(tokens[0] === '/help'){
        
        let keywords = 'nothing';
        if(tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");
        }
    
        message.channel.send({embed: {
          title: "_please vote for:_",
          color: 3447003,
          description: keywords
        }}).then(function(sentMessage) {
            sentMessage.react('👍').then(() => sentMessage.react('👎')).catch(() => console.error('emoji failed to react.'));
        });  
    }



}

 

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
