const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    let tokens = msg.content.split(" ");

    if(tokens[0] === '/ping') {
        const r = Math.floor(Math.random() * replies.length);
        message.reply(replies[r]);

    }

    if(tokens[0] === '/gif'){

        let keywords = 'nothing';
        if(tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");

        }
        
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=1O4OB5Z2JAMM&limit=8`;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);

        let index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);


    }
    if(tokens[0] === '/vote'){
        let keywords = 'nothing';
        if(tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");
        }

        const embed = new Discord.MessageEmbed()
      
        .setTitle('vote for:')
        .setColor(0x00ff00)
        .setDescription(keywords);

        message.channel.send(embed).then(function(sentMessage) {
            sentMessage.react('👍').then(() => sentMessage.react('👎')).catch(() => console.error('emoji failed to react.'));
        });


    }
    if(tokens[0] === '/help'){

        const embed = new Discord.MessageEmbed()
      
        .setTitle('here is some help')
        .setColor(0xff0000)
        .setDescription('/ping ; /gif [your search] ; /vote [your voting theme]');

        message.reply(embed);

    }


  }  

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
