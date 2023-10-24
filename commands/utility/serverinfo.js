const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Get information about the server'),
    async execute(interaction) {
        const guild = interaction.guild;
        const memberCount = guild.memberCount;
        const serverOwner = guild.owner;
        const serverCreationDate = guild.createdTimestamp;

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Server Information')
            .addFields('Server Name', guild.name)
            .addFields('Member Count', memberCount)
            .addFields('Server Owner', `${serverOwner.user.username}#${serverOwner.user.discriminator}`)
            .addFields('Server Creation Date', new Date(serverCreationDate).toDateString());

        await interaction.reply({ embeds: [embed] });
    },
};