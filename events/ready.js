var schedule = require('node-schedule');
const { MessageFlags } = require('discord.js');
var display = require('../commands/display');

require('log-timestamp');

module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`)

    var j = schedule.scheduleJob('0 0 7 * * *', function(){
        const channel = client.channels.cache.get('717213839267201061');
        // display.display_names(client)

        channel.send('24 hour confirmation!');
        console.log("24 hours passed");
        // channel.send('!roll-D20');
    });
}
