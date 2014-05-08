var express = require("express");
var cradle = require("cradle");

var config = {
	host: "127.0.0.1",
	port: "5984",
	db: "zuhair",
} 

// Connect to CouchDB
var connection = new(cradle.Connection)(config.host, config.port);
var db = connection.database(config.db);

db.exists(function (err, exists) {
    if (err) {
      console.log('error', err);
    } else if (exists) {
      console.log('the force is with you.');
    } else {
      console.log('database does not exists.');
      db.create();
      /* populate design documents */
    }
      var doc = {
		"name": "Zuhair",
		"age": 25,
		"nationality": "Bahraini"
	}

	db.save(doc);
  });

