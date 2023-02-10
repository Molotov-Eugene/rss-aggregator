import he from 'he';

export default (elements, value, i18n) => {
  const feed = `<div class="card border-0">
  <div class="card-body">
    <h2 class="card-title h4">${i18n.t('feeds')}</h2>
  </div>
  <ul class="list-group border-0 rounded-0">
  ${value.map((item) => `<li class="list-group-item border-0 border-end-0">
        <h3 class="h6 m-0">${he.encode(item.feedTitle)}</h3>
        <p class="m-0 small text-black-50">
          ${he.encode(item.description)}
        </p>
      </li>`).join('\n')}
  </ul>
  </div>`;

  elements.feeds.innerHTML = feed;
};
