import getWeather from '../API/WeatherAPI';

function input(value) {
  const inputval = document.querySelector('#weather');
  if (value === 'imperial') {
    getWeather(inputval.value, 'imperial');
  } else if (value === 'metric') {
    getWeather(inputval.value, 'metric');
  } else {
    getWeather(inputval.value, 'imperial');
  }
}

export default input;
