import he from 'he';

export default (elements, posts, i18n) => {
  const container = elements.posts;
  const html = `<div class="card border-0">
  <div class="card-body">
    <h2 class="card-title h4">${i18n.t('posts')}</h2>
  </div>
  <ul class="list-group border-0 rounded-0">
    ${posts.map((post) => (`<li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0">
        <a href="${he.encode(post.link)}" class="${post.readed ? 'fw-normal link-secondary' : 'fw-bold'}" data-id="${post.id}" target="_blank" rel="noopener noreferrer">
          ${he.encode(post.title)}
        </a>
        <button type="button" class="btn btn-outline-primary btn-sm" data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#modal">
          ${i18n.t('view')}
        </button>
      </li>`)).join('\n')}
  </ul>
  </div>`;

  container.innerHTML = html;
};
