import _ from 'lodash';
import * as yup from 'yup';
// import axios from 'axios';
import onChange from 'on-change';
import render from './view/watchers.js';

const state = {
  formState: {
    isValid: true,
    errors: {},
  },
  feeds: [],
};

const schema = yup.string().url();

const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return _.keyBy(e.inner, 'path');
  }
};

export default () => {
  const watcher = onChange(state, (path, value) => {
    render(path, value);
  });
  const formElement = document.querySelector('.rss-form');

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);

    watcher.formState.errors = validate(formData.get('url'));
  });
};
