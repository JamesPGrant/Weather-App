// add Aesthetic to end to get actual good gifs

async function getGif() {
  const nonParsed = localStorage.getItem('weather');
  const parsed = JSON.parse(nonParsed);
  const tv = document.querySelector('.tvScreen');
  const awaitGif = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ZKmdYhC3Vw4ValNHVYdKrKfqd6OBmlpP&s=${parsed.mood[0].description}`);
  const gifData = await awaitGif.json();
  tv.style.background = `url(${gifData.data.images.original.url})`;
}

export default getGif;
