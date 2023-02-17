import axios from 'axios';
import utils from '../utils.js';
import parser from './parser.js';

const getLinks = (arr) => arr.map((feed) => feed.link);
const { proxy, updateTime } = utils;

export default function updater(watchedState) {
  const { posts } = watchedState;
  const links = getLinks(watchedState.feeds);

  const promises = links.map((url) => axios({
    method: 'get',
    url: proxy(url),
  }).then((response) => {
    const data = parser(response.data.contents);
    const postsData = data.posts;
    const postsLinks = posts.map((post) => post.link);
    const newPosts = postsData.filter((post) => !postsLinks.includes(post.link));
    posts.unshift(...newPosts);
  }).catch((e) => {
    console.warn(e.message); /* eslint no-console: ["error", { allow: ["warn"] }] */
  }));

  Promise.all(promises)
    .finally(() => setTimeout(() => updater(watchedState), updateTime));
}
