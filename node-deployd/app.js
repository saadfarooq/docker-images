var deployd = require("/usr/local/lib/node_modules/deployd");
var fs = require('fs');
var dpdPort = 3000;
var resourceDir = 'resources';

// create resources dir if one doesn't exist
if (!fs.existsSync(resourceDir)) {
    fs.mkdirSync(resourceDir);
}

var options = {
    port: dpdPort,
    env: process.env.DPD_ENV || 'development',
    db: {
        host: process.env.MONGO_SERVER,
        port: process.env.MONGO_PORT || 27017,
        name: process.env.MONGO_DB || 'deployd',
    }
}

if (process.env.MONGO_USERNAME != undefined && process.env.MONGO_PASSWORD != undefined) {
    options.db.credentials = {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD
    }
}

var server = deployd(options)

server.listen()

server.on('listening', function() {
  console.log("Server listening on port: " + dpdPort);
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});