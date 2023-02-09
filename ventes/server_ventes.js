var express = require('express');
var app = express();

var port = process.env.PORT || 3001;

app.get('/ventes/test', function (req, res) {
  res.status(200).send('test ventes route !');
});

app.get('/ventes', function (req, res) {
  res.status(200).send('Home serveur ventes !');
});

var server = app.listen(port, function() {
  console.log('Le serveur ventes a démaré sur le port ' + port);
});