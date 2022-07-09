import latLonggetAPI from './latlong';

function showPosition(position) {
  const lat = Math.round(position.coords.latitude * 1000000) / 1000000;
  const long = Math.round(position.coords.longitude * 1000000) / 1000000;
  latLonggetAPI(lat.toString(), long.toString(), 'imperial');
}

function getLocation(value) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, value);
  } else {
    console.log('This action is not supported by this browser');
  }
}
export default getLocation;
