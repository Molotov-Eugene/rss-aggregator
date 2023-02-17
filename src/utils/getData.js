import axios from 'axios';
import { uniqueId } from 'lodash';
import utils from './utils.js';
import parse from './parser.js';

const { proxy } = utils;

export default (watchedState, url) => axios({ url: proxy(url) }).then((response) => {
  const data = parse(response.data.contents, url);
  const { feed, posts } = data;
  const postsWithID = posts.map((x) => ({ ...x, id: uniqueId() }));
  watchedState.feeds.unshift(feed);
  watchedState.posts.unshift(...postsWithID);
});
