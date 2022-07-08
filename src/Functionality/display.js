function display(value) {
  let string = '';
  const location = document.querySelector('.location');
  const temp = document.querySelector('.weather');
  const feels = document.querySelector('.feelsLike');
  const humid = document.querySelector('.humidity');
  if (value.type === 'imperial') {
    string = '°F';
  } else if (value.type === 'metric') {
    string = '°C';
  }
  location.textContent = `${value.name}`;
  temp.textContent = `Temperature: ${value.temp} ${string}`;
  feels.textContent = `Feels Like: ${value.feelsLike} ${string}`;
  humid.textContent = `Humitidy: ${value.humitidy} %`;
}

export default display;
