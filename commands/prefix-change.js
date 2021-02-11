module.exports = {
    name: 'prefix-change',
    description: "unmute a user!",
    async execute(message, args, prefix) {
        if(!args[0])return message.reply("Please enter the new prefix");

        if(args[0] > 5) return message.reply('The prefix cant be larger then 5');
        if(args[0] < 1) return message.reply('The prefix must be larger then 1') 
        else{
            prefix = args[0];        }
    }
}