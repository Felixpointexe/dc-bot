const Discord = require('discord.js');

const client = new Discord.Client();






 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
 
 
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
  
        const exampleEmbed = new Discord.MessageEmbed().setTitle('Some title');
  
       
        message.react('👍');
        message.react('👎');
  
 }
  
 


  

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
