const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Get information about the server'),
    async execute(interaction) {
        const guild = interaction.guild;
        await interaction.reply(`This server is called ${guild.name} and has ${guild.memberCount} members.`);
    },
};