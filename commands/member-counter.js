const { Client } = require("discord.js");

module.exports = async (client) => {
    const guild = client.guilds.cache.get('621806061690683418');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('809112717138591787');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}