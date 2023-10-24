const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar of a user')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        await interaction.reply(`Here is the avatar of ${user.username}: ${user.displayAvatarURL()}`);
    },
};