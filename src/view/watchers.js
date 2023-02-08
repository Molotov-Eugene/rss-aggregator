import formRender from './form-render.js';

export default (path, value, elements) => {
  switch (path) {
    case 'formState.error':
      formRender(elements, value);
      break;
    case 'formState.status':
      break;
    default:
      throw new Error(`unknown path ${path}`);
  }
};
