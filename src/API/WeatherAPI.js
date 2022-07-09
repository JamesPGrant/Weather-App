import Weather from '../Weather';
import display from '../Functionality/display';

const errorText = document.querySelector('.error');
async function getWeather(value, mode) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=${mode}&APPID=306b3aa8a1088f4bc0b9639939879ea2`, {
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => {
      const weather = Weather(
        res.main.temp,
        res.main.humidity,
        res.main.feels_like,
        res.name,
        mode,
        res.weather,
      );
      display(weather);
      localStorage.setItem('weather', JSON.stringify(weather));
      return weather;
    })
    .catch((error) => {
      errorText.textContent = 'Input must be a valid location';
      return error;
    });
}

export default getWeather;
