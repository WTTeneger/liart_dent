import dotenv from 'dotenv'
dotenv.config()
import { app } from './app.js'
const PORT = process.env.PORT || 8000
console.log(PORT);



import * as fs from 'fs';
import * as http from 'http'
import * as https from 'https'
// const port = 3000;
// var privateKey = fs.readFileSync('sslcert/selfsigned.key', 'ascii');
// var certificate = fs.readFileSync('sslcert/selfsigned.crt', 'ascii');
var privateKey = fs.readFileSync('sslcert/server.key');
var certificate = fs.readFileSync('sslcert/server.crt');
// var ca1 = fs.readFileSync(__dirname + '/sslcert/ca1.crt', 'ascii');
// var ca2 = fs.readFileSync(__dirname + '/sslcert/ca2.crt', 'ascii');
console.log(privateKey);

var credentials = {
    key: privateKey,
    cert: certificate,
    // ca: [ca1, ca2]
};


http.createServer(app).listen(3000)
https.createServer(credentials, app).listen(8443)
// var server = https.createServer(credentials, app);

// server.listen(443, () => {
//     console.log(`Server has been started on port ${PORT}`)
// })

// console.log(credentials.key);
// var httpServer = http.createServer(app);
// // var httpsServer = https.createServer(credentials, app);

// httpServer.listen(3000);
// // httpsServer.listen(443);
// let port = 3000

// var server = https.createServer(credentials, app);
// server.listen(443, () => {
//     console.log("server starting on port : " + 443)
// });

// var credentials = { key: privateKey, cert: certificate };
// var express = require('express');
// var app = express();

// your express configuration here

// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080);
// httpsServer.listen(8443);

// var server = https.createServer(options, app);

// server.listen(PORT, () => {
// //     console.log(`Server has been started on port ${PORT}`)
// // })
// var server = https.createServer(options, app);

// server.listen(80, function () {
//     console.log("server running at https://IP_ADDRESS:80/")
// })
// http.createServer(app).listen(3000)
// https.createServer(options, app).listen(443);
// import * as ge from 'greenlock-express';
// console.log(ge);
// ge.default.init({
//     // Let's Encrypt v2 is ACME draft 11
//     version: 'draft-11'
//     , server: 'https://acme-v02.api.letsencrypt.org/directory'

//     // You MUST change these to valid email and domains
//     , email: 'john.doe@example.com'
//     , approveDomains: ['example.com', 'www.example.com']
//     , agreeTos: true
//     , configDir: "/path/to/project/acme/"

//     , app: app

//     , communityMember: true // Get notified of important updates
//     , telemetry: true       // Contribute telemetry data to the project
// }).serve(80, 443);
