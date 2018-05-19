const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'What are the chapter names?') {
         //message.reply('1.Alienated 2.The Lonely Ghost 3.Reunion 4.The Fallen Gods 5.Oversight 6.Weightless 7.Pregame 8.War 9.Reborn 10.Hero Time 11.Humanity 12.This is My Story epilogue')
        message.channel.sendMessage('1.Alienated 2.The Lonely Ghost 3.Reunion 4.The Fallen Gods 5.Oversight 6.Weightless 7.Pregame 8.War 9.Reborn 10.Hero Time 11.Humanity 12.This is My Story epilogue');
        
    }

});

bot.login('NDQ2MTE0MjcyNTkwODIzNDI0.Dd0aEA.GrGmgMBL4HWpMPt3gwPo0tPAX0A');