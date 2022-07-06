/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-parens */
const Weather = (temp, feelsLike) => {
  getTemp => () => temp;
  getfeelslike => () => feelsLike;
  return { temp: getTemp(), feelsLike: getfeelslike() };
};

export default Weather;
