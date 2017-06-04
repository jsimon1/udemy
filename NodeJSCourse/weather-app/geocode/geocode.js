// app.js doesn't need to care abotu any of the details of formatting the address and requesting from the Google Maps api
// so we move all functionality to geocode.js and export the one method to call from app.js
const request = require('request');

// INSTEAD OF NEEDING THREE FUNCTIONS HERE, WE CAN TIE IT ALL INTO ONE FUNCTION SO THE FINAL RESULT (RESULTS) CAN BE CALLED BACK IN APP.JS.
// THERES NO NEED TO BE SO COMPLEX BECAUSE APP.JS JUST CARES ABOUT THE END RESULT, IF GEOCODE RELIED ON MULTIPLE COMPONENTS THEN IT WOULD MAKE
// MORE SENSE TO HAVE MULTIPLE FUNCTIONS TO HANDLE THOSE DIFFERENT COMPONENTS
var geocodeAddress = (address, callback) => {
  // EncodedURIComponent makes a string link-friendly
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (err, response, body) => {
    if (err) {
      callback('Unable to connected to Google servers.');
    }
    else if (body.status === "OK") {
      // DEFINING THE COMPLEXITY OF THE API IN VERY SIMPLE TERMS FOR THE APP.JS, WHERE EVERYTHING DONE HERE IS SUPPOSED TO BE ABSTRACTED
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng,
      });
    }
    else {
      callback('Error with address');
    }
  });
}

module.exports = {
  geocodeAddress
};
