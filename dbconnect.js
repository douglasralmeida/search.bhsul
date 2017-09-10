'use strict';

var dburl = "mongodb://localhost:27017/db";
var mongo = require("mongodb").MongoClient;

mongo.connect(dburl)
  .then(conn => {
    global.conn = conn;
    console.log("Conectando com MongoDB em " + dburl);
  })
  .catch(err => console.log(err));

function pesquisarKB(param, callback) {
  global.conn.collection("kb").find({"$text": {"$search": param}}).toArray(callback);
};

module.exports = {pesquisarKB};