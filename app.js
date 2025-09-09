const { 
    Client, GatewayIntentBits, SlashCommandBuilder,
    EmbedBuilder, ButtonBuilder,
    ButtonStyle
 } = require('discord.js');
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
bot.on('ready', ()=>{
    console.log(`${bot.user.username} is online`);
    const quiz = new SlashCommandBuilder()
                    .setName('quiz')
                    .setDescription('Asks you a random question');
    bot.application.commands.create(quiz);
});

bot.on('interactionCreate', interaction=>{
    if(!interaction.isChatInputCommand()|
        interaction.commandName!=='quiz') return;
    
    const embed = new EmbedBuilder()
      .setTitle("Question")
      .addFields(
        { name: "Alice", value: "120", inline: true },
        { name: "Bob", value: "95", inline: true },
        { name: "Charlie", value: "88", inline: true }
      );
    const btnA = new ButtonBuilder()
        .setCustomId('a')
        .setLabel('A').
        setStyle(ButtonStyle.Primary)


    interaction.reply({ embeds: [embed] });
})

bot.login(token);