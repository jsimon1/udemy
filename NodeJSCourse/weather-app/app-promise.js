const yargs = require('yargs');
const axios = require('axios');

// yargs init
// demand = required, string is true to ensure a string is passed with the address flag
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather data',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios.get(geocodeURL).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/0d17dd4babb710edb8f4ce2adf5bb4c2/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response) => {
  var temp = response.data.currently.temperature;
  var appTemp = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temp}. It feels like ${appTemp}.`)
}).catch((err) => {
  if(err.code === 'ENOTFOUND') {
      console.log("Unable to connect to Google Maps API");
  } else {
    console.log(err.message);
  }
});

//
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
