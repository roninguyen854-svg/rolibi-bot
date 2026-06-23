const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const coins = {};

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const userId = interaction.user.id;

  if (!coins[userId]) {
    coins[userId] = 1000;
  }

  // PING
  if (interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong!');
  }

  // BALANCE
  if (interaction.commandName === 'balance') {
    await interaction.reply(`💰 Bạn có ${coins[userId]} coins!`);
  }

  // DAILY
  if (interaction.commandName === 'daily') {
    coins[userId] += 500;

    await interaction.reply(
      `🎁 Bạn nhận được 500 coins!\n💰 Số dư hiện tại: ${coins[userId]}`
    );
  }

  // BLACKJACK
  if (interaction.commandName === 'blackjack') {
    const bet = 100;

    if (coins[userId] < bet) {
      return interaction.reply('❌ Bạn không đủ coins!');
    }

    const win = Math.random() < 0.5;

    if (win) {
      coins[userId] += bet;

      await interaction.reply(
        `🃏 Blackjack!\n✅ Bạn thắng ${bet} coins!\n💰 Số dư: ${coins[userId]}`
      );
    } else {
      coins[userId] -= bet;

      await interaction.reply(
        `🃏 Blackjack!\n❌ Bạn thua ${bet} coins!\n💰 Số dư: ${coins[userId]}`
      );
    }
  }
});

client.login(process.env.TOKEN);
