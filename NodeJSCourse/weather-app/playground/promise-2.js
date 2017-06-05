const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (err, response, body) => {
      if (err) {
        reject('Unable to connected to Google servers.');
      } else if (body.status === "OK") {
        // DEFINING THE COMPLEXITY OF THE API IN VERY SIMPLE TERMS FOR THE APP.JS, WHERE EVERYTHING DONE HERE IS SUPPOSED TO BE ABSTRACTED
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng,
        });
      } else {
        reject('Error with address');
      }
    });
  });
};

geocodeAddress('00000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errMessage) => {
  console.log(errMessage);
})
