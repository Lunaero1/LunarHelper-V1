const { SlashCommandBuilder } = require('@discordjs/builders');
const { version } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Get advanced statistics about the bot'),
    async execute(interaction) {
        const { client } = interaction;
        const uptime = (client.uptime / 1000).toFixed(2);
        const guildCount = client.guilds.cache.size;
        const channelCount = client.channels.cache.size;
        const userCount = client.users.cache.size;
        await interaction.reply(`Bot Version: ${version}\nUptime: ${uptime} seconds\nGuilds: ${guildCount}\nChannels: ${channelCount}\nUsers: ${userCount}`);
    },
};