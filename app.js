const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORDJS_TOKEN;

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const prefix = '!';
bot.on('ready', ()=>console.log(`${bot.user.username} is online`));

bot.on('message', (message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith(prefix))
    {
        const cmd = message.content.substring(prefix.length);
        console.log(cmd);
    }
})
bot.login(token);