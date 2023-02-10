import axios from 'axios';
import config from '../config.js';
import parser from './parser.js';

const getLinks = (arr) => arr.map((feed) => feed.link);
const { proxy, updateTime } = config;

export default function updater(watcher) {
  const { posts } = watcher;
  const links = getLinks(watcher.feeds);

  const promises = links.map((url) => axios({
    method: 'get',
    url: proxy(url),
  }).then((response) => {
    const data = parser(response.data.contents);
    const postsData = data.posts;
    const postsLinks = watcher.posts.map((post) => post.link);
    const newPosts = postsData.filter((post) => !postsLinks.includes(post.link));
    posts.unshift(...newPosts);
  }).catch((e) => {
    throw e;
  }));

  Promise.all(promises)
    .finally(() => setTimeout(() => updater(watcher), updateTime));
}
