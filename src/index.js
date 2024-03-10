//hides bot token from github & viewers using gitignore and env while letting proj still have access
require('dotenv').config();

const {Client, IntentsBitField} = require('discord.js');

//gives bot permission to do access 'guild' aka discord server 
const client = new Client({
   intents: [
      IntentsBitField.Flags.Guilds, 
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.MessageContent,
   ],
});

//Prints in console if bot is online
client.on('ready', (c) =>{
console.log(`${c.user.tag} is ready to GOOOOOOOOOOOOOOO!`);
});
 //reads messages from user, makes sure if bot, and responds based off message content 

client.on('messageCreate', (msg) => {
   if (msg.author.bot){return;}
   if (msg.content === '?online') {
      msg.reply('I am online')} });

//puts bot online
client.login(process.env.TOKEN)

client.on('interactionCreate', (interaction) => {

   if (!interaction.isChatInputCommand())return;
   console.log(interaction.commandName)

   if (interaction.commandName == 'hey'){
      interaction.reply('Hey, hey, hey');
   };

   if (interaction.commandName == 'ping'){
      interaction.reply('Pong!');}
   if (interaction.commandName == 'test'){
      interaction.reply('Passed');}

   if(interaction.commandName=='add'){
const num1 = interaction.options.get('first-num').value;
const num2 = interaction.options.get('second-num').value;
interaction.reply(`${num1} plus ${num2} equals ** ${num1+num2} **`);
   }

})

const { version: discordJSVersion } = require('discord.js');
console.log('Discord.js version:', discordJSVersion);

