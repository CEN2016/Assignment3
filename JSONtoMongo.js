'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'), 
    listings = require('./listings.json'), 
    assert = require('assert'); 
    MongoClient = require('mongodb').MongoClient;  

MongoClient.connect(config.db.uri, function(err, db) { 
    assert.equal(null, err); 
    if(err) throw err; 
    console.log("Connected"); 
    var collection = db.collection('documents'); 
    for (var i in listings.entries) 
	collection.insert(listings.entries[i]); 
    console.log("Entered listings into database"); 
    db.close(); 
}); 


