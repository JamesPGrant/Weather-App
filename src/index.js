import createElement from './createElement';
import input from './Functionality/form';
import card from './Elements/Card';
import buttonClick from './Functionality/Button';
import getLocation from './API/getIP';
import getCurrTime from './Functionality/currentTime';
import './styles/main.css';

const celcius = document.querySelector('.celcius');
const farenheight = document.querySelector('.Farenheight');
const button = document.querySelector('.submit');
button.addEventListener('click', input);
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
