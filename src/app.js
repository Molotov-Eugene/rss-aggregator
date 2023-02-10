import onChange from 'on-change';
import config from './config.js';
import render from './view/watchers.js';
import inputController from './controllers/input-controller.js';
import localeRender from './view/locale-render.js';
import updatePosts from './utils/update-posts.js';
import modalController from './controllers/modal-controller.js';

const app = () => {
  const { state, i18n } = config;

  const elements = {
    body: document.querySelector('body'),
    form: document.querySelector('.rss-form'),
    input: document.querySelector('#url-input'),
    button: document.querySelector('[aria-label="add"]'),
    feedback: document.querySelector('.feedback'),
    posts: document.querySelector('.posts'),
    feeds: document.querySelector('.feeds'),
    locale: {
      button: document.querySelector('[aria-label="add"]'),
      placeholder: document.querySelector('label[for="url-input"]'),
      tip: document.querySelector('.text-muted'),
      header: document.querySelector('h1'),
      subHeader: document.querySelector('.lead'),
    },
    modal: {
      container: document.querySelector('.modal'),
      title: document.querySelector('.modal-title'),
      description: document.querySelector('.modal-body'),
      readButton: document.querySelector('.full-article'),
      closeButtons: document.querySelectorAll('[data-bs-dismiss="modal"]'),
    },
  };

  const watcher = onChange(state, (path, value) => {
    render(path, value, elements, i18n);
  });

  localeRender(elements.locale, i18n);
  updatePosts(watcher);
  inputController(elements, watcher, i18n);
  modalController(elements, watcher);
};

export default app;
