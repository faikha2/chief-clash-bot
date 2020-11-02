// Get access to list members command
const { MessageFlags } = require('discord.js');
var display = require('../commands/display');

module.exports = (client, member) => {

    console.log("This is a test");
    display.display_welcome(client);

    // const channel = client.channels.cache.get('742801891704045639');

    // channel.send("This is a test");
}