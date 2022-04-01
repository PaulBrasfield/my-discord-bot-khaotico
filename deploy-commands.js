require('dotenv').config();

const DISCORD_CLIENT_ID = '934543702838370414' //process.env.DISCORD_CLIENT_ID;
const DISCORD_GUILD_ID = '934542388205060196' //process.env.DISCORD_GUILD_ID;
const DISCORD_TOKEN = "OTM0NTQzNzAyODM4MzcwNDE0.YexnpQ.AAKWb3z0ubcEPg6GhLRwzjbtCzE" //process.env.DISCORD_TOKEN;

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
    new SlashCommandBuilder().setName('refund').setDescription('Gives point reund'),
    new SlashCommandBuilder().setName('twitter').setDescription('Replies with Twitter'),
    new SlashCommandBuilder().setName('youtube').setDescription('Replies with Youtube'),
    new SlashCommandBuilder().setName('cool').setDescription('wow that\'s cool man'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);