async function getWeather() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=306b3aa8a1088f4bc0b9639939879ea2', {
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.main.temp);
    });
}

export default getWeather;
