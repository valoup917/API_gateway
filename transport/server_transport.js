var express = require('express');
var app = express();

var port = process.env.PORT || 3002;

app.get('/transport/test', function (req, res) {
  res.status(200).send('test transport route !');
});

app.get('/transport', function (req, res) {
  res.status(200).send('Home serveur transport !');
});

var server = app.listen(port, function() {
  console.log('Le serveur transport a démaré sur le port ' + port);
});