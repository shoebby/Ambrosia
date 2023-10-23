const { SlashCommandBuilder } = require('discord.js');

var quoteArray = [
	'"Depression is melancholy minus its charms."',
	'"Nobody ever gets what they want when it comes to love."',
	'"I laugh, and my lipstick leaves a red stain like a bloody crescent moon on the top of the beer can."',
	'"Often it feels like I am breathing today only because a few years back I had no idea which nerve to cut..."'
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('melancholy')
		.setDescription('Replies with a melancholic phrase.'),

	async execute(interaction) {
		const randomQuote = Math.floor(Math.random() * quoteArray.length);
		await interaction.reply(quoteArray[randomQuote]);
	},
};