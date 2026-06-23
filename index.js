client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong!');
  }

  if (interaction.commandName === 'balance') {
    await interaction.reply('💰 Bạn có 1000 coins!');
  }
});
new SlashCommandBuilder()
  .setName('balance')
  .setDescription('Xem số coin');
git add .
git commit -m "add balance"
git push
