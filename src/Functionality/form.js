import getWeather from '../API/WeatherAPI';

function input(value) {
  const inputval = document.querySelector('#weather');
  const first = localStorage.getItem('weather');
  const parse = JSON.parse(first);
  if (input.value === undefined && value === 'metric') {
    getWeather(parse.name, 'metric');
  } else if (input.value === undefined && value === 'imperial') {
    getWeather(parse.name, 'imperial');
  }
  if (value === 'imperial') {
    getWeather(inputval.value, 'imperial');
  } else if (value === 'metric') {
    getWeather(inputval.value, 'metric');
  } else {
    getWeather(inputval.value, 'imperial');
  }
}

export default input;
