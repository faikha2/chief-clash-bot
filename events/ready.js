var schedule = require('node-schedule');
const { MessageFlags } = require('discord.js');
var display = require('../commands/display');
var api = require('../commands/API_call');

require('log-timestamp');

module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`)

    var j = schedule.scheduleJob('0 0 7 * * *', function(){
        const channel = client.channels.cache.get('717213839267201061');


        api.call_api()
        api.update_data()

        display.display_names(client)

        channel.send('24 hour confirmation!');
        console.log("24 hours passed");
        // channel.send('!roll-D20');
    });
}
