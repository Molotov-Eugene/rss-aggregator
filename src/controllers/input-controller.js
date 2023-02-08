import urlValidator from '../urlValidator.js';

export default (element, watcher, i18n) => {
  element.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(element);
    const url = formData.get('url');
    const validate = urlValidator(i18n)(url);
    validate.then(() => {
      watcher.formState.error = '';
      watcher.formState.status = 'sending';
    }).catch((err) => {
      watcher.formState.error = err.message;
    });
  });
};
