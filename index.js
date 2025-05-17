const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require('axios');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to my bot'));
bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.on('sticker', (ctx) => ctx.reply('❤️'));
bot.command('defer', async (ctx) => {
  const result = await axios.get(
    'https://github.com/callbackhell-1/Javascript-refresher/blob/main/01-console-async-defer/script.js'
  );
  ctx.reply(result.data);
});
bot.on('text', (ctx) => {
  if (ctx.update.message.text === 'bro') {
    ctx.reply('Yo !! Bro');
  } else {
    ctx.reply("I can't understand the text");
  }
});

bot.launch();
