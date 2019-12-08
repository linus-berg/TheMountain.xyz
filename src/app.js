'use strict';
var express = require('express');
var io = require('socket.io');
var http = require('http');
var moment = require('moment');


var app = express();
var srv = http.createServer(app);
var socket = io(srv);

const PORT = 3000;
app.use(express.static('./public'));

srv.listen(PORT, function(){
  console.log('Server started on *:' + PORT);
});

