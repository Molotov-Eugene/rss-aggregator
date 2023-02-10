export default (elements, watcher) => {
  const container = elements.posts;
  const { closeButtons } = elements.modal;

  container.addEventListener('click', (event) => {
    if (event.target.dataset.bsToggle === 'modal') {
      const { id } = event.target.dataset;
      watcher.UIstate.postID = id;

      if (!watcher.UIstate.visitedPosts.includes(id)) {
        watcher.UIstate.visitedPosts.push(id);
      }
    }
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      watcher.UIstate.postID = null;
    });
  });
};
