const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=6%20Myrtle%20Street%20Montvale',
  json: true
}, (err, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Long: ${body.results[0].geometry.location.lng}`);
});

// Sample request - can define options in first parameter, second is a callback.
// JSON.stringify takes the object as its first paramter, a filter as its second paramter, and the number of spaces
// to pretty print the JSON (instead of it just being a garbled paragraph of objects)
//
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=6%20Myrtle%20Street%20Montvale',
//   json: true
// }, (err, response, body) => {
//   console.log(JSON.stringify(body, undefined, 2));
// });
//
// Response contains status code, body, headers (api -> node), request object (node -> api)
// console.log(response);

// error contains specific problems in node relating to making the request. No request means err = null
// If there was a problem with the api itself, it would be explained in the status code in the response
// console.log(err);
