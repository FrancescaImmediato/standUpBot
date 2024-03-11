require('dotenv').config();
const { REST, Routes, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

//Define Commands
const commands = [
   {name: 'embed', 
   description: 'Sends an embed',
   },
];


const rest = new REST({version:'10'}).setToken(process.env.TOKEN);

(async () => {
   try {
      console.log('registering slash commands...');

      await rest.put(
         Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
         {body: commands}
      )
      console.log('Slash Commands were registered successfully');
      
   }catch(error) {
   console.log(`THERE WAS AN ERROR FRANNY! SEE I HERE: ${error}`);
}
})();
