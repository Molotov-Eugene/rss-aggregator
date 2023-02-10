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

const updateTime = 5000;

const proxy = (url) => `https://allorigins.hexlet.app/get?disableCache=true&url=${url}`;

export default {
  state,
  i18n,
  processState,
  updateTime,
  proxy,
};
