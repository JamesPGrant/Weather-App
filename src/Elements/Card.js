import createElement from '../createElement';

function card() {
  const cardCon = document.querySelector('.card');
  const location = createElement('h3', { class: 'location', id: 'card' });
  const temperature = createElement('p', { class: 'weather', id: 'card' });
  const feelsLike = createElement('p', { class: 'feelsLike', id: 'card' });
  const humitidy = createElement('p', { class: 'humidity', id: 'card' });
  cardCon.appendChild(location);
  cardCon.appendChild(temperature);
  cardCon.appendChild(feelsLike);
  cardCon.appendChild(humitidy);
}

export default card;
