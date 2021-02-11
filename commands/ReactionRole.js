module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '809209445048647711';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('הרשאות לקטגוריות השונות')
            .setDescription('כאן תוכל לקבל גישה לקטגוריות השונות בשרת! כדי לבחור את ההרשאה המתאימה אתה מוזמן להצביע לאחת או יותר מהאופציות הבאות:\n\n'
                + `<:amongUs:809214971022934060> for Among Us\n\n`
                + `<:minecraft:809214971535687741> for Minecraft\n\n`
                );

        let messageEmbed = await message.channel.send(embed);
        message.delete();

        messageEmbed.react('809214971022934060');
        messageEmbed.react('809214971535687741');
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == 'minecraft') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add('732328645896437791');
                }
                if (reaction.emoji.name == 'amongUs') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add('809215309289619466');
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == 'amongUs') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove('809215309289619466');
                }
                if (reaction.emoji.name == 'minecraft') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove('732328645896437791');
                }
            } else {
                return;
            }
        });
    }
 
}   