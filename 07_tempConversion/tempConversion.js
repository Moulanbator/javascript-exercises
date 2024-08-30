const convertToCelsius = function(year) {
  farenheitToCels = Math.round(((year - 32) * (5/9)) * 10) / 10;
  return farenheitToCels;
};

const convertToFahrenheit = function(year) {
  celcsiusToFar = Math.round((year * (9/5) + 32) * 10) / 10;
  return celcsiusToFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
