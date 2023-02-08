export default (elements, i18n) => {
  Object.entries(elements).forEach(([name, element]) => {
    element.textContent = i18n.t(name);
  });
};
