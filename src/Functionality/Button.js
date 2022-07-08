import input from './form';

function buttonClick(measurement) {
  if (measurement === 'metric') {
    input('metric');
  } else if (measurement === 'imperial') {
    input('imperial');
  }
}

export default buttonClick;
