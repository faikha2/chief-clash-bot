var schedule = require('node-schedule');
const { MessageFlags } = require('discord.js');

require('log-timestamp');

module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`)

    var j = schedule.scheduleJob('* */1 * * *', function(){
        const channel = client.channels.cache.get('717213839267201061');
        channel.send('1 hour confirmation!');
        console.log("1 hour passed");
        // channel.send('!roll-D20');
    });
}