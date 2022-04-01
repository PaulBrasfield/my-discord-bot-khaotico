require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(client.user.id);
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) {
        return;
    }

    const { commandName } = interaction;

    if (commandName === 'refund') {
        await interaction.reply('Your channel points :PepeLaugh: :point_right: :chart_with_downwards_trend:');
    } else if (commandName === 'twitter') {
        await interaction.reply('https://twitter.com/KhaoticoTTV');
    } else if (commandName === 'youtube') {
        await interaction.reply('Test');
    } else if (commandName === 'cool') {
        await interaction.reply('Wow that\'s cool man')
    }
});


client.on('messageCreate', (msg) => {
    if (msg.content.includes('Hello') && msg.content.includes(client.user.id) 
        && msg.author.id !== client.user.id) { 
        
            msg.reply('Hello!');
    }

    if (msg.content.includes('my xbox blow out') && msg.author.id !== client.user.id) { 
    
        msg.reply('By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion. ' + 
        'Remember, O Lord, The Children of Edom in the day of Jerusalem who said, "Raze it, raze it, ' + 
        'even to the foundation." O daughter of Babylon, who art to be destroyed. ' + 
        'How happy shall he be, that rew https://twitter.com/pauljac3_/status/984445523326263296?s=20');
    }

    if (msg.content.startsWith('!twitter') && msg.author.id !== client.user.id) { 
        
        msg.channel.send("https://twitter.com/KhaoticoTTV")
    
    } 

    if (msg.content.startsWith('!youtube') && msg.author.id !== client.user.id) { 
        
        msg.channel.send("https://www.youtube.com/channel/UC803hb0MzuN1Mz1W6_iUu-w")
    
    } 

    if (msg.content.startsWith('!friendcode') && msg.author.id !== client.user.id) { 
        
        msg.channel.send("Switch Friend Code: SW-3714-0961-8601")
    
    } 

    if (msg.content.startsWith('!twitch') && msg.author.id !== client.user.id) { 
        
        msg.channel.send("https://twitch.tv/Khaotico")
    
    } 

    if (msg.content.startsWith('!refund') && msg.author.id !== client.user.id) { 
        
        msg.reply("<:PepeLaugh:934558781017321534> :point_right: :chart_with_downwards_trend: Your channel points")
    
    } 

    console.log(msg.author.username + ': ' + msg.content);
});

client.login(DISCORD_TOKEN);

