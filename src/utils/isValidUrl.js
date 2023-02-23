import * as yup from 'yup';

export default (url, feeds = []) => {
  const schema = yup.string().url('invalidURL')
    .required('required')
    .notOneOf(feeds, 'rssExist');

  return schema.validate(url);
};
