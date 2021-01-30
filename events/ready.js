var schedule = require('node-schedule');
const { MessageFlags } = require('discord.js');
var display = require('../commands/display');
var api = require('../commands/API_call');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');

require('log-timestamp');

module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`)

    var j = schedule.scheduleJob('1 */1 * * *', function(){
        // const channel = client.channels.cache.get('717213839267201061');
        // CODE FOR TESTING
        const channel = client.channels.cache.get('695062761339879457');
        
        api.call_api()
        console.log("Updating API")
        channel.send("Wait...")

        api.update_data()
        channel.send('Wait a little bit more...')
        display.display_names(client)

        // channel.send('1 hour confirmation!');
        // console.log("1 hours passed");
        // channel.send('!roll-D20');
    });
}
