// Create a way to get API info. We're using the request method
const rp = require('request-promise');
// Get access to the file system
const fs = require('fs');

// Let's the request-promise module know we are routhing traffic through proxy
const fixieRequest = rp.defaults({'proxy': process.env.FIXIE_URL});

// URL and my token of the target site
var url = 'https://api.clashofclans.com/v1/clans/%23L929PGQ2/members';
var token = 'Bearer ' + process.env.TOKEN;

// Additional info to add the URL for the GET request
var options = {
    uri: url,
    headers: {
        'authorization' : token
    },
    json: true // Automatically parses the JSON string in the response
};

// Actual API call done here through a request promise
function call_api () {
    // Uses our proxy
    fixieRequest(options)
        .then(function (response) {
            
            // If the response comes without an error, it writes it to a file as a JSON string
            fs.writeFile('user_data.json', JSON.stringify(response), (err) => {
                if (err) throw err;
                console.log('Data written to file');
            });

            // Return the response
            return response;
        })
        .catch(function (err) {
            // API call failed...
            console.log("Error in API_call");

            // Return's nothing if there's an error
            return null;
        });
}

// Parses through JSON file to get names
function parse() {

    // Opens up the json file and reads data into an object variable
    var obj;
    fs.readFile('user_data.json', 'utf8', function (err, data) {

        // Basic error handling
        if (err) throw err;

        // Convers the file into a JSON object
        obj = JSON.parse(data);
        console.log(obj.items);

        // Loops through the JSON object and accesses clan member's names
        for (key in obj.items) {
            console.log(obj.items[key].name)
        }
    });

}

module.exports = {
    call_api : call_api, 
    parse : parse,
};
