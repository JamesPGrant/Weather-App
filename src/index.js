import createElement from './createElement';
import input from './Functionality/form';
import card from './Elements/Card';
import buttonClick from './Functionality/Button';
import getLocation from './API/getIP';
import getCurrTime from './Functionality/currentTime';
import './styles/main.css';
import './styles/ipad.css';

const celcius = document.querySelector('.celcius');
const error = document.querySelector('.error');
const farenheight = document.querySelector('.Farenheight');
const button = document.querySelector('.submit');
button.addEventListener('click', () => {
  const inputval = document.querySelector('#weather');
  if (inputval.value === '') {
    error.textContent = 'Please type a valid location!';
    return;
  }
  error.textContent = '';
  input();
});
celcius.addEventListener('click', () => {
  buttonClick('metric');
});
farenheight.addEventListener('click', () => {
  buttonClick('imperial');
});
createElement();
card();
getLocation();
getCurrTime();
