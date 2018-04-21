process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('./config/express');
let express = require('express');
let http = require('http');

let configurePassport = require("./config/passport");
const passport = configurePassport();

//Get port from environment
let port = normalizePort(process.env.PORT || '3000');
app.set('port', '3000');

let server = http.createServer(app);
server.listen(port, () => console.log('Server running'));

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

module.exports = app;


