console.log('connected')

const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";
function get(latitude, longitude){
let api= `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
}

fetch('api')
  .then(response => response.json())
  .then(data => console.log(data));