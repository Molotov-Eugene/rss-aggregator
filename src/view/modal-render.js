import config from '../config.js';

const { posts } = config.state;

export default (elements, value) => {
  const { body } = elements;
  const {
    container, title, description, readButton,
  } = elements.modal;
  const id = value;
  const activePost = posts.find((p) => p.id === id);

  const open = (post) => {
    body.classList.add('modal-open');
    container.classList.add('show');
    container.style.display = 'block';
    readButton.href = post.link;
    title.textContent = post.title;
    description.textContent = post.description;
  };

  const close = () => {
    body.classList.remove('modal-open');
    container.classList.remove('show');
    container.style.display = 'none';
    readButton.href = '#';
  };

  if (id === null) {
    close();
  }

  if (id > 0) {
    activePost.readed = true;
    const link = document.querySelector(`a[data-id="${id}"]`);
    link.classList.remove('fw-bold');
    link.classList.add('fw-normal', 'link-secondary');
    open(activePost);
  }
};
