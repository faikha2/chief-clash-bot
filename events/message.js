// Allows us to call the API functions
var api = require('../commands/API_call');

module.exports = (client, msg) => {

    if (msg.content === "!test") {
       api.update_data();
    }


}