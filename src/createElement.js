/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const createElement = (title, attribute) => {
  const element = document.createElement(title);
  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
  return element;
};

export default createElement;
