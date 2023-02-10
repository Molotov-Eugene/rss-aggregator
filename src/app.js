import onChange from 'on-change';
import config from './config.js';
import render from './view/watchers.js';
import inputController from './controllers/input-controller.js';
import localeRender from './view/locale-render.js';
import updatePosts from './utils/update-posts.js';
import modalController from './controllers/modal-controller.js';

const app = () => {
  const { state, i18n, elements } = config;

  const watcher = onChange(state, (path, value) => {
    render(path, value, elements, i18n);
  });

  localeRender(elements.locale, i18n);
  updatePosts(watcher);
  inputController(elements, watcher, i18n);
  modalController(elements, watcher);
};

export default app;
