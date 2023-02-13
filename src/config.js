import resources from './locales/index.js';

const defaultLanguage = document.documentElement.lang;

const state = {
  lng: defaultLanguage,
  formState: {
    isValid: true,
    error: '',
    status: '',
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

const updateTime = 5000;

const proxy = (url) => `https://allorigins.hexlet.app/get?disableCache=true&url=${url}`;

export default {
  state,
  i18nConfig,
  updateTime,
  proxy,
};
