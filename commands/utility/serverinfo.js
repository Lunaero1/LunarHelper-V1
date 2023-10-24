const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Get information about the server'),
    async execute(interaction) {
        const guild = interaction.guild;
        const memberCount = guild.memberCount;
        const serverOwner = guild.ownerId;
        const serverCreationDate = guild.createdAt.toDateString();

        await interaction.reply(`Server Name: ${guild.name}\nMember Count: ${memberCount}\nServer Owner: ${serverOwner}\nServer Creation Date: ${serverCreationDate}`);
    },
};