import axios from 'axios';
import { uniqueId } from 'lodash';
import utils from './utils.js';
import parse from './parser.js';

const { proxy } = utils;

export default (url) => axios({ url: proxy(url) }).then((response) => {
  const data = parse(response.data.contents, url);
  const { feed, posts } = data;
  const postsWithID = posts.map((x) => ({ ...x, id: uniqueId() }));
  return { feed, postsWithID };
});
