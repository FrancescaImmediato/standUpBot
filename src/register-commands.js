require('dotenv').config();
const { REST, Routes, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

//Define Commands
const commands = [
   { name: 'hey',
      description: 'Replies a greeting',
   },
   { name: 'ping',
      description: 'PONG!',
   },
   { name: 'test',
      description: 'Passed',
   },
   { name: 'add', 
   description: 'adds two numbers', 
   options: [
      { name: 'first-num',   
      description: 'the first number',
      type: ApplicationCommandOptionType.Number,
      choices: [
         {
            name: 'one',
            value: 1,
         },
         {name: 'two',
      value: 2,},
      {name: 'three',
   value: 3,},
      ],
   required: true,  }, 
      { name: 'second-num', 
      description: 'the second number',
      type: ApplicationCommandOptionType.Number,
   required: true,  }
   ,],}
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
