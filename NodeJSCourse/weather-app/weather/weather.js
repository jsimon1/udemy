const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/0d17dd4babb710edb8f4ce2adf5bb4c2/${lat},${lng}`,
    json: true
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      callback(undefined, {
        temp: body.currently.temperature,
        appTemp: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather', undefined);
    }
  });
};

module.exports = {
  getWeather
};
