const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Get information about a user')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        await interaction.reply(`The user's username is ${user.username} and their ID is ${user.id}.`);
    },
};