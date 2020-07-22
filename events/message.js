// Allows us to call the API functions
var api = require('../commands/API_call');
var schedule = require('node-schedule');
var strike = require('../commands/strike_handling');
const { MessageFlags } = require('discord.js');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

module.exports = (client, msg) => {

    // if (msg.content === "!test") {
    //    api.update_data();
    // }

    if (msg.content === "Ya") {
        console.log("THIS IS A TEST");
        msg.reply("Yuppers");
    }

    if (msg.content === "!test") {
        const channel = client.channels.cache.get('735285805085491250');
        channel.send('Test confirmed!');
        channel.send('!roll-D20');
    }

    if (msg.content === "!roll-help") {
        msg.reply("Use the command !roll-D# with the # being 4, 6, 8, 10, 12, or 20");
    }

    if (msg.content === "!roll-D4") {
        var num = getRandomIntInclusive(0, 4);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D6") {
        var num = getRandomIntInclusive(0, 6);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D8") {
        var num = getRandomIntInclusive(0, 8);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D10") {
        var num = getRandomIntInclusive(0, 10);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D12") {
        var num = getRandomIntInclusive(0, 12);
        msg.reply("You rolled a " + num + "!");
    }
    if (msg.content === "!roll-D20") {
        var num = getRandomIntInclusive(0, 20);
        msg.reply("You rolled a " + num + "!");
    }

    // if (msg.content === "Ye") {
    //     strike.add_strike(client, "This is my reason");
    // }

    // var j = schedule.scheduleJob('*/5 * * * *', function(){
    //     const channel = client.channels.cache.get('735285805085491250');
    //     channel.send('5 mintute confirmation!');
    //     channel.send('!roll-D20');
    // });

    // var j = schedule.scheduleJob('0 0 * * *', function(){
    //     console.log('The answer to life, the universe, and everything!');
    //     msg.reply("This should happen at midnight every night");
    // });

}