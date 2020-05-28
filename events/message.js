// // Get access to our kick command
// var kick = require('../commands/kick');
// // Get access to list commands command
// var lc = require('../commands/list_commands');
// // Get access to list members command
// var list_mem = require('../commands/list_members');
// // Get access to json creation
// var test_json = require('../commands/create_json');
// // Get access to print conduct (json) info
// var print_json = require('../commands/state_conduct_info');
// // 
// var parse_for_names = require('../commands/parse_for_names');
// // 
// var add_strike = require('../commands/add_strike');
// // 
// var clear_strike = require('../commands/clear_strikes');
// // Create a way to get API info. We're using the request method
// const request = require('request');

module.exports = (client, msg) => {

    if (msg.content === "!test") {
        msg.reply("The test has passed!");
    }
    // if (msg.content === "List names") {
    //     msg.reply("The List command was recieved");
    //     list_mem(client);
    // }

    // if (msg.content.startsWith("Kick")) {
    //     msg.reply("The Kick command was recieved");
    //     return kick(msg)
    // }

    // if (msg.content === "Help") {
    //     msg.reply("Here is a list of commands:");
    //     lc(client, msg);
    // }

    // if (msg.content === "List strike data") {
    //     msg.reply("Request to list data received! Listing data now: \n");
    //     var names = parse_for_names();

    //     // Standard for llop
    //     for (key in names) {
    //         var name = names[key];
    //         // console.log(name);
    //         print_json(client, name, false, false, true);
    //     }
    // }

    // if (msg.content.startsWith("Data: ")) {

    //     msg.reply("Request to list data for specific user recieved!");

    //     var name = msg.content.slice(6);
    //     // console.log(name);

    //     // msg.reply("Got json print req");
    //     print_json(client, name, false, false);
    // }

    // if (msg.content.startsWith("Add strike: ")) {

    //     msg.reply("Request to add strike for specific user recieved!");

    //     var name_reason = msg.content.slice(12);
    //     var split = name_reason.split(':');

    //     var name = split[0].trim();
    //     var reason = split[1].trim(); 

    //     add_strike(client, name, reason);
    // }

    // if (msg.content.startsWith("Clear strikes: ")) {

    //     msg.reply("Request to clear strikes recieved!");
    //     var name = msg.content.slice(15);
    //     clear_strike(client, name);
    // }

    // // ---------------------------------------------------------------------------------------------

    // if (msg.content.startsWith("Data strike only: ")) {
    //     var name = msg.content.slice(18);
    //     console.log(name);

    //     msg.reply("Got json print req");
    //     print_json(client, name, false, true);        
    // }

    // if (msg.content.startsWith("Data reason only: ")) {
    //     var name = msg.content.slice(18);
    //     console.log(name);

    //     msg.reply("Got json print req");
    //     print_json(client, name, true, false);        
    // }

    // if (msg.content === "json") {
    //     msg.reply("json request recieved");
    //     test_json(client);
    // }

}