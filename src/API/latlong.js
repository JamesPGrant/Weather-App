import Weather from '../Weather';
import display from '../Functionality/display';

async function latLonggetAPI(lat, long, mode) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${mode}&APPID=306b3aa8a1088f4bc0b9639939879ea2`, {
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
      );
      display(weather);
      localStorage.setItem('weather', JSON.stringify(weather));
      return weather;
    });
}

export default latLonggetAPI;
