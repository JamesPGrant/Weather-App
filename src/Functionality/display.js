/* eslint-disable no-plusplus */
import getGif from '../API/gifApi';

function display(value) {
  let string = '';
  const location = document.querySelector('.location');
  const temp = document.querySelector('.weather');
  const feels = document.querySelector('.feelsLike');
  const humid = document.querySelector('.humidity');
  const aesthetic = document.querySelector('#titleWeather');
  if (value.type === 'imperial') {
    string = '°F';
  } else if (value.type === 'metric') {
    string = '°C';
  }
  const getCasing = value.mood[0].description;
  const properCasing = getCasing.split(' ');
  for (let i = 0; i < properCasing.length; i++) {
    properCasing[i] = properCasing[i][0].toUpperCase() + properCasing[i].substr(1);
  }
  aesthetic.textContent = `${properCasing.join(' ')}`;
  location.textContent = `${value.name}`;
  temp.textContent = `Temperature: ${value.temp} ${string}`;
  feels.textContent = `Feels Like: ${value.feelsLike} ${string}`;
  humid.textContent = `Humitidy: ${value.humitidy} %`;
  getGif();
}

export default display;
