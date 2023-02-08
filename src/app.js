import i18next from 'i18next';
import onChange from 'on-change';
import render from './view/watchers.js';
import resources from './locales/index.js';
import inputController from './controllers/input-controller.js';
import localeRender from './view/locale-render.js';

const configure = () => {
  const defaultLanguage = 'ru';
  const state = {
    lng: defaultLanguage,
    formState: {
      error: '',
      status: 'waiting',
    },
    feeds: [],
  };

  const i18nConfig = {
    lng: defaultLanguage,
    debug: false,
    resources,
  };

  const i18n = i18next.createInstance();
  i18n.init(i18nConfig);

  return [state, i18n];
};

const app = () => {
  const [state, i18n] = configure();
  const elements = {
    formElement: document.querySelector('.rss-form'),
    inputFieldElement: document.querySelector('#url-input'),
    buttonElement: document.querySelector('[aria-label="add"]'),
    feedbackArea: document.querySelector('.feedback'),
    locale: {
      button: document.querySelector('[aria-label="add"]'),
      placeholder: document.querySelector('label[for="url-input"]'),
      tip: document.querySelector('.text-muted'),
      header: document.querySelector('h1'),
      subHeader: document.querySelector('.lead'),
    },
  };

  const watcher = onChange(state, (path, value) => {
    render(path, value, elements);
  });

  localeRender(elements.locale, i18n);
  inputController(elements.formElement, watcher, i18n);
};

export default app;
