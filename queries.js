/* Fill out these functions using Mongoose queries*/
var   mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config.js'),
      listings = require('./listings.json'),
      assert = require('assert'),
      MongoClient = require('mongodb').MongoClient;

var findLibraryWest = function(err, collection) {

  collection.find({ name : 'Library West' }, function(err, collection) {
    if(err) throw err;

    console.log(collection);
  });
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
};
var removeCable = function(err, collection) {
  if(err) throw err;

  collection.findOneAndRemove({ code : 'CABL' }, function(err, collection) {
    if(err) throw err;

    console.log(collection);
  });

  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsMemorial = function(err, listingSchema) {

  collection.findOneAndUpdate({ name : 'Phelps Memorial Hospital Center' }, { address : '123 New Street' }, function(err, colleciton) {
    if(err) throw err;

    console.log(collection);
  });

  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function(err, collection) {

  collection.find({}, function(err, collection) {
    if(err) throw err;

    console.log(collection);
  });

  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
