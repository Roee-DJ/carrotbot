const ms = require('ms')
module.exports = {
    name: 'mute',
    description: "mute a user!",
    async execute(message, args) {
        const target = message.mentions.users.first()
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name == 'muted')

            let memberTarget = message.guild.members.cache.get(target.id)
            if (!args[1]) {
                memberTarget.roles.add(muteRole.id)
                message.channel.send(`<@${memberTarget.user.id}> הושתק`)
                message.delete()
                return;
            }
            memberTarget.roles.add(muteRole.id)
            message.channel.send(`<@${memberTarget.user.id}> הושתק`)
            message.delete()
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id)
            }, ms(args[1]))
        } else {
            message.channel.send('לא נמצא משתמש')
        }
    }
}