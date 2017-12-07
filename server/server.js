var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var game = require('./routes/game');
var mongoose = require('mongoose');

var port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/game', game);

// MONGOOSE CONNECTION
var databaseUrl = 'mongodb://localhost:27017/game_chest';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to :', databaseUrl);
});

mongoose.connection.on('error', function(error){
    console.log('mongoose connection error', error);
})

app.listen(port, function(){
    console.log('listening on port', port);  
});