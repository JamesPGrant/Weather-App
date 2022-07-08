function getCurrTime() {
  const time = new Date().toLocaleTimeString();
  const currTime = document.querySelector('.currTime');
  currTime.textContent = `${time}`;
}

setInterval(() => {
  getCurrTime();
}, 1000);

export default getCurrTime();
