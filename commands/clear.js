module.exports = {
    name: 'clear',
    description: "clear chat",
    async execute(message, args) {
        if(!args[0])return message.reply("Please enter the number of messages you want to delete");

        if(isNaN(args[0])) return message.reply("Please enter a real number")

        if(args[0] > 10) return message.reply('You cant delete more then 10 messages')
        if(args[0] < 2) return message.reply('The number must be larger then 2')
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}