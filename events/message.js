// Allows us to call the API functions
var api = require('../commands/API_call');
var schedule = require('node-schedule');

module.exports = (client, msg) => {

    if (msg.content === "!test") {
       api.update_data();
    }

    if (msg.content === "Ya") {
        console.log("THIS IS A TEST");
        msg.reply("Yo");
    }

    // var j = schedule.scheduleJob('*/5 * * * *', function(){
    //     console.log('The answer to life, the universe, and everything!');
    //     msg.reply("This should happen every 5 minutes");
    // });

    var j = schedule.scheduleJob('0 0 * * *', function(){
        console.log('The answer to life, the universe, and everything!');
        msg.reply("This should happen at midnight every night");
    });

}