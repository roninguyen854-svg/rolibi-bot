const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    // PING
    if (interaction.commandName === 'ping') {
        await interaction.reply('🏓 Pong!');
    }

    // BALANCE
    if (interaction.commandName === 'balance') {
        await interaction.reply('💰 Bạn có 1000 coins!');
    }
});

client.login(process.env.TOKEN)
