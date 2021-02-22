const Discord = require('discord.js');

const client = new Discord.Client();

//const fetch= require('node-fetch');






 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', gotMessage );
 
async function gotMessage(message){ 
    let tokens = message.content.split(" ");

    if(tokens[0] === 'ping') {
        
        message.reply('dein ping ist mir pong');

    }

    
    if (message.content === 'hs') {	


       message.reply('was man sagt  is man selbst, wenn man nicht die klappe hält  😝');	   


       }
 if (message.content === '/help') {	


       message.reply('ne du hs... ich sag es dir nicht');	   
       message.channel.send('👍'); 


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
  
 if(tokens[0] === '/gif'){
     let url = `https://g.tenor.com/v1/search?q=starwars&key=1O4OB5Z2JAMM&limit=8`;
     
  
  
  message.channel.send(url);
  
 }

 


  

}

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
