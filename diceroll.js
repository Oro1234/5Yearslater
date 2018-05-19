const commando = require('discord.js-commando');

class CharacterCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'Character',
            group: 'random',
            memberName: 'Character'
            description: '5YL Characters'
         });
     }

    async run(message, args) {
        message.reply("http://5yl.wikia.com/wiki/Danny_Fenton");

    }
}

module.exports = CharacterCommand;