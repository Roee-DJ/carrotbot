module.exports = {
    name: 'unmute',
    description: "unmute a user!",
    async execute(message, args) {
        const target = message.mentions.users.first()
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name == 'muted')

            let memberTarget = message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(muteRole.id)
            message.channel.send(`ההשתקה של <@${memberTarget.user.id}> בוטלה`)
            message.delete()
        }else{
            message.channel.send('לא נמצא משתמש')
        }
    }
}