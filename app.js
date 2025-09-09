const { 
    Client, GatewayIntentBits, SlashCommandBuilder,
    EmbedBuilder, ButtonBuilder,
    ButtonStyle, ActionRowBuilder
 } = require('discord.js');
require('dotenv').config();
const questions = require('./questions.json');


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

bot.on('interactionCreate', async (interaction)=>{
    if(!interaction.isChatInputCommand()|
        interaction.commandName!=='quiz') return;
    
    const embed = new EmbedBuilder()
      .setTitle("Question")
      .addFields(
        { name: "Alice", value: "120", inline: true }
      );
    const btnA = makeBtn('a', 'A');
    const btnB = makeBtn('b', 'B');
    const btnC = makeBtn('c', 'C');
    const btnD = makeBtn('d', 'D');


    const row = new ActionRowBuilder()
        .addComponents(btnA, btnB, btnC, btnD);

await interaction.reply({
  embeds: [embed],
  components: [row],
});
})

bot.login(token);

function makeBtn(id, name)
{
    return new ButtonBuilder()
            .setCustomId(id)
            .setLabel(name).
            setStyle(ButtonStyle.Primary);
}