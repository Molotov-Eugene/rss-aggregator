const updateTime = 5000;

const proxy = (url) => `https://allorigins.hexlet.app/get?disableCache=true&url=${url}`;

export default { updateTime, proxy };
