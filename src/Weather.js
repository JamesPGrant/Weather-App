/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-parens */
const Weather = (temp, humitidy, feelsLike, name, type) => {
  const getTemp = () => temp;
  const getHumitidy = () => humitidy;
  const getfeelslike = () => feelsLike;
  const getName = () => name;
  const getType = () => type;
  return {
    temp: getTemp(),
    humitidy: getHumitidy(),
    feelsLike: getfeelslike(),
    // eslint-disable-next-line comma-dangle
    name: getName(),
    type: getType(),
  };
};

export default Weather;
