const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a poll')
        .addStringOption(option => option.setName('question').setDescription('Enter the poll question').setRequired(true))
        .addStringOption(option => option.setName('options').setDescription('Enter the poll options, separated by commas').setRequired(true)),
    async execute(interaction) {
        const question = interaction.options.getString('question');
        const options = interaction.options.getString('options').split(',');

        let pollOptions = '';
        options.forEach((option, index) => {
            pollOptions += `${index + 1}. ${option.trim()}\n`;
        });

        await interaction.reply(`Poll: ${question}\nOptions:\n${pollOptions}`);
    },
};