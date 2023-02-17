import * as yup from 'yup';

export default (url, feeds = []) => {
  const schema = yup.string().url('errors.url')
    .required('errors.required')
    .notOneOf(feeds, 'errors.rssExist');

  return schema.validate(url);
};
