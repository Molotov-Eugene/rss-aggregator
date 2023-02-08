import _ from 'lodash'

const watchers = (path, value) => {
  const inputElement = document.querySelector('#url-input');

  switch (path) {
    case 'formState.errors':
      if (!_.isEmpty(value)) {
        inputElement.classList.add('is-invalid');
      } else {
        inputElement.classList.remove('is-invalid');
      }
      break;
    default:
      throw new Error(`unknown path ${path}`);
  }
};

export default watchers;