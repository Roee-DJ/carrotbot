const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

var prefix = '!';
const fs = require('fs');
const memberCounter = require('./commands/member-counter')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('bot is online!');
    client.user.setActivity('make by Roee_G', {type: "WATCHING" }).then(console.log('work'))
    memberCounter(client)
});


client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.channel.id == '809209322834755655' || message.channel.id == '809209445048647711'){
        console.log(prefix)
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        // if (command === 'reactionrole') {
        //     client.commands.get('reactionrole').execute(message, args, Discord, client);
        // }
        // if (command === 'rules') {
        //     client.commands.get('rules').execute(message, args, Discord);
        // }
        if (command === 'clear') {
            if(message.member.roles.cache.has('651058157505871912') || message.member.roles.cache.has('809065018481180702')){
                client.commands.get('clear').execute(message, args);
            }else{
                message.channel.send('You dont have permission to use this command')
            }
        }
        if (command === 'mute') {
            client.commands.get('mute').execute(message, args);
        }
        if (command === 'unmute') {
            client.commands.get('unmute').execute(message, args);
        }
        if (command === 'reactionrole') {
            client.commands.get('reactionrole').execute(message, args, Discord, client);
        }
    }else{
        message.delete()
    }

    // if (command === 'prefix') {
    //     client.commands.get('prefix-change').execute(message, args, prefix);
    // }
    // if (command === 'unban') {
    //     client.commands.get('unban').execute(message, args);
    // }
    // if (command === 'newmember') {
    //     client.commands.get('newmember').execute(message, args, Discord, client);
    // }
});

client.login('ODA5MDY3MjEyMTA2NDk4MDg5.YCPsjw.wpb78Rycd61DmRxHRes2l4E_Oow');