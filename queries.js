/* Fill out these functions using Mongoose queries*/
var   mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config.js'),
      assert = require('assert'),
      MongoClient = require('mongodb').MongoClient;


var findLibraryWest = function(collection, Listing) {

    console.log('Find Library West');

    collection.find({ name : 'Library West' }, function(err, docs) {
      if(err) throw err;

      console.log(docs.code);
  });
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
};
var removeCable = function(collection, Listing) {

  console.log('Remove CABL');

  Listing.findOneAndRemove({ code : 'CABL' }, function(err, docs) {
    if(err) throw err;

    console.log(docs);
  });

  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsMemorial = function(collection, Listing) {

  console.log('Update Phelps Lab');

  Listing.findOneAndUpdate({ name : 'Phelps Laboratory' }, { address : '1953 Museum Rd Gainesville, FL 32611' }, function(err, docs) {
    if(err) throw err;

    console.log(docs);
  });

  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function(collection, Listing) {

  console.log('Retrieve All Listings');

  Listing.find({}, function(err, docs) {
    if(err) throw err;

    console.log(docs);
  });

  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

MongoClient.connect(config.db.uri, function(err, db) {
  assert.equal(null, err);
  var collection = db.collection('documents');

  findLibraryWest(collection, Listing);
  removeCable(collection, Listing);
  updatePhelpsMemorial(collection, Listing);
  retrieveAllListings(collection, Listing);

  db.close();
});
