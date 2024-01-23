const { Client, Intents } = require('discord.js-selfbot-v13');
const client = new Client();
const config = require('./config.json'); 

client.on('ready', async () => {
    console.log(`Selfbot on: ${client.user.tag}`);
    const guild = await client.guilds.fetch(config.guildId);

    guild.members.fetch().then(members => {
        members.each(member => {
            config.roleIds.forEach(roleId => {
                if(member.roles.cache.has(roleId)) {
                    const role = guild.roles.cache.get(roleId);
                    console.log(`ID user for the rol: ${role.name}: ${member.user.id}`);
                }
            });
        });
    });
});

client.login(config.token); 

