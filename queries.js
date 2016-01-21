/* Fill out these functions using Mongoose queries*/
var   mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config.js'),
      assert = require('assert'),
      MongoClient = require('mongodb').MongoClient;


var findLibraryWest = function(collection) {

    console.log('Find Library West');

    var found = collection.findOne({ name : 'Library West' }); 
    if (found) 
    	console.log('Found West'); 
    console.log(found); 

};

var removeCable = function(collection) {

  console.log('Remove CABL');
// First find cabl to log it, then remove it. 
    var found = collection.findOne({ code : 'CABL' }); 
    console.log(found); 


  collection.remove({ code : 'CABL' }, function(err) {
    if(err) 
	console.log('CABL not found');
  });

};
var updatePhelpsMemorial = function(collection) {

  console.log('Update Phelps Lab');

  collection.update({ name : 'Phelps Laboratory' }, 
  {
            "code": "PHL", 
            "name": "Phelps Laboratory", 
            "coordinates": {
                "latitude": 41.1091195, 
                "longitude": -73.8639555
            }, 
            address : '1953 Museum Rd Gainesville, FL 32611'
        }); 
};

var retrieveAllListings = function(collection) {

  console.log('Retrieve All Listings');

  var found = collection.find({}, { code: 1, name: 1, coordinates: 1, address:1 }); 
  if (found.hasNext()) 
	console.log(found.next()); 
// found is an object called a "cursor" which needs to be iterated though with next method. if empty return null

 };

MongoClient.connect(config.db.uri, function(err, db) {
    assert.equal(null, err); 
    if(err) throw err; 
    console.log("Connected"); 
    var collection = db.collection('documents'); 
    findLibraryWest(collection); 
    removeCable(collection); 
    updatePhelpsMemorial(collection); 
    retrieveAllListings(collection); 
    db.close(); 
}); 
