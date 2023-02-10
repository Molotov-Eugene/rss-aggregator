import i18next from 'i18next';
import resources from './locales/index.js';

const defaultLanguage = document.documentElement.lang;

const state = {
  lng: defaultLanguage,
  formState: {
    isValid: true,
    error: '',
    status: 'waiting',
  },
  feeds: [],
  posts: [],
  UIstate: {
    postID: null,
    visitedPosts: [],
  },
};

const i18nConfig = {
  lng: defaultLanguage,
  debug: false,
  resources,
};

const i18n = i18next.createInstance();
i18n.init(i18nConfig);

const processState = {
  waiting: 'waiting',
  recieved: 'recieved',
  error: 'error',
  sending: 'sending',
};

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
    tip: document.querySelector('.text-white-50'),
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

const updateTime = 5000;

const proxy = (url) => `https://allorigins.hexlet.app/get?disableCache=true&url=${url}`;

export default {
  state,
  i18n,
  processState,
  updateTime,
  proxy,
  elements,
};
