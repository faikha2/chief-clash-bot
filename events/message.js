// Allows us to call the API functions
var api = require('../commands/API_call');
var strike = require('../commands/strike_handling');
var display = require('../commands/display');
const { MessageFlags } = require('discord.js');
require('log-timestamp');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

module.exports = (client, msg) => {

    if (msg.content === "!num") {
        let r = Math.random().toString(36).toUpperCase().substr(2, 4);
        console.log("random", r);
        msg.reply("Number is: " + r)
    }

    if (msg.content === "!create-strike-data") {
        api.create_strike_data()
        msg.reply("Created data")
    }

    if (msg.content === "!update-data") {
        api.update_data()
        msg.reply("Updated data")
    }
 
    if (msg.content === "!call-api") {
       api.call_api();
       msg.reply("Called the api - hopefully it worked");
    }

    if (msg.content === "!create-data") {
        api.create_strike_data();
        msg.reply("Created the data file - hopefully it worked");
    }

    if (msg.content.startsWith("!add-strike")) {
        var command = msg.content;
        var id = msg.content.substr(12, 4);
        var reason = msg.content.substr(17);

        console.log(reason);
        strike.add_strike(client, id,  reason);
    }

    if (msg.content === "!display-strikes") {
        display.display_strikes(client)
    }

    if (msg.content === "!display-names") {
        display.display_names(client);
    }

    if (msg.content === "!welcome-message") {
        display.display_welcome(client);
    }
 
    if (msg.content === "Ya") {
        console.log("THIS IS A TEST");
        msg.reply("THIS IS A TEST. I REPEAT, THIS IS A TEST.");
    }

    if (msg.content === "!test") {
        api.call_api()
        api.update_data()
        display.display_names(client)
    }

    if (msg.content === "!help") {
        msg.reply("Use !display_names to display all the names and IDs. Then use !add-strike #### REASON to give someone a strike. If you want to see all the strikes, use !display-strikes.")
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

    // var j = schedule.scheduleJob('0 0 * * *', function(){
    //     console.log('The answer to life, the universe, and everything!');
    //     msg.reply("This should happen at midnight every night");
    // });

}