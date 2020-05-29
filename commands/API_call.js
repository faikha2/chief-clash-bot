// Create a way to get API info. We're using the request method
const rp = require('request-promise');
// Get access to the file system
const fs = require('fs');

const fixieRequest = rp.defaults({'proxy': process.env.FIXIE_URL});

var url = 'https://api.clashofclans.com/v1/clans/%23L929PGQ2/members';
var token = 'Bearer ' + process.env.TOKEN;

var options = {
    uri: url,
    headers: {
        'authorization' : token
    },
    json: true // Automatically parses the JSON string in the response
};

function call_api () {
    fixieRequest(options)
        .then(function (response) {
            // console.log(JSON.stringify(response));

            fs.writeFile('user_data.json', JSON.stringify(response), (err) => {
                if (err) throw err;
                console.log('Data written to file');
            });

            return response;
        })
        .catch(function (err) {
            // API call failed...
            console.log("Error in API_call");
            return null;
        });
}

module.exports = {
    call_api : call_api, 
};
