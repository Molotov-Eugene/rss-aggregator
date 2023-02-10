import axios from 'axios';
import { uniqueId } from 'lodash';
import urlValidator from '../utils/urlValidator.js';
import parser from '../utils/parser.js';
import config from '../config.js';

const { proxy } = config;

export default (elements, watcher, i18n) => {
  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(elements.form);
    const url = formData.get(elements.input.name).trim();
    const validate = urlValidator(i18n, watcher.feeds);

    validate(url).then(() => {
      watcher.formState.error = '';
      watcher.formState.status = 'sending';
      axios({
        url: proxy(url),
      }).then((response) => {
        const data = parser(response.data.contents, url);
        const { feed, posts } = data;
        const postsWithID = posts.map((x) => ({ ...x, id: uniqueId() }));
        watcher.feeds.unshift(feed);
        watcher.posts.unshift(...postsWithID);
        watcher.formState.status = 'recieved';
        elements.form.reset();
      }).catch((e) => {
        const error = e.isParsing ? i18n.t('errors.badRSS') : i18n.t('errors.network');
        watcher.formState.error = error;
        watcher.formState.status = 'error';
      });
    }).catch((e) => {
      watcher.formState.error = e.message;
    });
  });
};
