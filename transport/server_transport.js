var express = require('express');
var app = express();

var port = process.env.PORT || 3002;

app.get('/', function (req, res) {
  res.status(200).send('Serveur transport !');
});


var server = app.listen(port, function() {
  console.log('Le serveur transport a démaré sur le port ' + port);
});