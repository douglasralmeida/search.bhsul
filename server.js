'use strict';

global.db = require('./dbconnect');
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

// Constantes
var PORT = 5055;
var HOST = '127.0.0.1';

// App
var app = express();

// Implementa compartilhamento de recursos Cross-Origin
var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200
};

var corsOptionsDelegate = function(req, callback){
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.options('/kb', cors(corsOptionsDelegate));

// Implementa um parser
app.use(bodyparser.json());

app.get('/teste', function (req, res) {
  res.send('search.bhsul esta vivo!\n');
});

//POST
app.post('/kb', cors(corsOptions), function(req, res) {
  var param;
  var resultado;

  if (!req.body) return res.sendStatus(400);
  param = req.body.consulta;
  global.db.pesquisarKB(param, (e, list) => {
    if (e) { return console.log(e); }
    res.send(list);
  });  
});

app.listen(PORT);
console.log('Executando em http://localhost:'  + PORT);
module.exports = app;