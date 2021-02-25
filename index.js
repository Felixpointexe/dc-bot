const Discord = require('discord.js');
const client = new Discord.Client();
const fetch= require('node-fetch');



client.on('ready', () => {

    console.log('I am ready!');
    console.log(`Logged in as ${client.user.tag}!`);
    
    
    client.user.setPresence({
        status: "online",
        game: {
            name: 'Use /help',
            type: "WATCHING",
            url: "https://github.com/Felixpointexe"
        }
    });
     

});

 

client.on('message', gotMessage );
 
async function gotMessage(message){ 
    let tokens = message.content.split(" ");
    
    if(message.channel.id != '813345162410459146' && message.channel.id != '812003291436154942' && message.channel.id !=  '814503926379446336'){
        return;
    }

    if(tokens[0] === 'ping') {
        
        message.reply('pong');

    }
    
    if(tokens[0] === 'Sniper') {
        
        message.reply('Max one trick');

    }

    
   
     if(tokens[0] === '/gif'){
         
        let keywords = 'nothing';
        if(tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");
        }
         
         if(keywords === 'adrian'){
             keywords = 'total looser';
         }
         
         if(keywords === 'felix' || keywords === 'Felix'){
             keywords = 'like a boss';
         }
         
         if(keywords === 'jonas'){
             keywords = 'brawl stars';
         }
         
         if(keywords === 'lucas' || keywords === 'Lucas'){
             keywords = 'Lucas Moura'
         }
         
         if(keywords === 'philipp' || keywords === 'Philipp'){
            keywords = 'Numa Numa Fortnite GIF'
         }
         
         
         if(keywords === 'anton' || keywords === 'Anton'){
            keywords = 'i am the senat'   //gibt kein gutes gif
         }
         
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=1O4OB5Z2JAMM&limit=8`;
        let response = await fetch(url);
        let json = await response.json();
       
       message.channel.send(json.results[0].url);
     }
    
    
    
    
    
    
    if(tokens[0] === '/spam'){
        message.react('📩');
        for ( x = 0; x < 30 ; x++){
       message.author.send("SPAM")
        }  
    }
    
    if(tokens[0] === '/invite'){
       message.author.send("click here to invite me to your server: https://discord.com/oauth2/authorize?client_id=811880872440627210&scope=bot");
        message.react('📩');
    }
    
    if(tokens[0] === '/vote'){
        
        let keywords = '[nothing]';
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
    
    
    if(tokens[0] === '/help'){
        message.reply({embed: {
          "url": "https://discordapp.com",
    "color": 2815231,
    
    "footer": {
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
      "text": "Bot made by @FeIjx#0260 and @bestever#6094 | https://github.com/Felixpointexe/dc-bot/"
    },
    "thumbnail": {
      "url": "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png"
    },
    
    "author": {
      "name": "/help",
      "url": "https://discordapp.com",
      "icon_url": "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png"
    },
    "fields": [
      {
        "name": "ping",
        "value": "pong"
      },
      {
        "name": "/gif [search]",
        "value": "sends a gif"
      },
      {
        "name": "/vote [topic]",
        "value": "makes it possible to vote in discord"
      },
      {
        "name": "/spam",
        "value": "try it out 😜"
        
      },
      {
        "name": "/invite",
        "value": "if you want this bot on your own server" 
      },
      {
        "name": "/rdm [min] [max]",
        "value": "outputs a random number between [min] and [max]" 
      },
      {
        "name": "/orakel [question]  or /orakel info",
        "value": "answers every Yes/No question" 
      },
      {
        "name": "/bastard [@username]",
        "value": "Bastard-award -> survey" 
      }  
    ]
        }});
        
    }
    
    
    
    if(tokens[0] === 'hs' || tokens[0] === 'Hs' || tokens[0] === 'HS' || tokens[0] === 'maul' || tokens[0] === 'huso' ){
       message.reply('🖕 selber!');
    }
    
    if(tokens[0] === '/rdm'){
        
        
        if( tokens.length < 3){
            message.reply('/rdm needs parameters [min] [max]');
            return;
        }
        
        
       
       
        let min = tokens[1];
        let max = tokens[2];
        
        let erg = parseInt(min);
         erg  += Math.round(Math.random() * (max-min));
        
          message.channel.send(erg);
        
           
        
    }
    
    if(tokens[0] === '/' ){
        
        let msg = message.content ;
       
       message.author.send( msg + ' is no valid command! If you want to create this command just contact @FeIjx#0260 😉');
       
       
       }
    
    if(tokens[0] === '/orakel' ){
        let keywords = '[nothing]';
        if(tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");
        }
        
        if(keywords === 'info'){
            message.reply('ask the oracle the same question only once, otherwise it can lie');
            return;
        }
        
        const answers = [
              'Ja',
              'Nein'
              ]
        const r = Math.floor(Math.random() * answers.length);
        
        message.channel.send({embed: {
          title: keywords,
          color: 3447003,
          description: answers[r]
        }});
        
    }
    
    if(tokens[0] === '/bastard'){
        
        let name = message.author.username;        
        let text = name + " findet, dass er selbst ein Bastard ist. \n Was denkt ihr darüber? Stimmt doch mal ab" ;
        
        if(tokens.length > 1){
            let name2 = tokens[1];
            text = name + " findet, dass " + name2 + " ein Bastard ist. \n Was denkt ihr darüber? Stimmt doch mal ab"    
        }
       
       message.channel.send({embed: {
          "title": "Der Bastard-award",
          "description": text,
          "color": 13632027,
          "image": {
             "url": "https://assets.stickpng.com/images/580b585b2edbce24c47b2af7.png"
           }

           
        }}).then(function(sentMessage) {
            sentMessage.react('👍').then(() => sentMessage.react('👎')).catch(() => console.error('emoji failed to react.'));
        }); 
        

    }
    
    
    if(tokens[0] === '/hi' ){
        //message.delete(500);                                 //no permission 😥
        message.reply('Hallo')
       .then(msg => {
        msg.delete(1000)
    })
    }
    

//Lucas war hier123
    // okdfgsdf

}

 

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
