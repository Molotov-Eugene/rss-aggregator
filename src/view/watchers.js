import formRender from './form-render.js';
import processRender from './process-render.js';
import feedsRender from './feeds-render.js';
import postsRender from './posts-render.js';
import modalRender from './modal-render.js';

export default (path, value, elements, i18n) => {
  switch (path) {
    case 'formState.error':
      formRender(elements, value, i18n);
      break;
    case 'formState.formState':
      processRender(elements, value, i18n);
      break;
    case 'feeds':
      feedsRender(elements, value, i18n);
      break;
    case 'posts':
      postsRender(elements, value, i18n);
      break;
    case 'UIstate.activePost':
      modalRender(elements, value);
      break;
    default:
      throw new Error(`unknown path ${path}`);
  }
};
