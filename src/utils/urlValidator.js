import * as yup from 'yup';

export default (i18n, feeds) => {
  const links = feeds.map((feed) => feed.link);

  yup.setLocale({
    string: {
      required: i18n.t('required.url'),
      url: i18n.t('errors.url'),
    },
  });

  const schema = yup.string().url()
    .required()
    .notOneOf(links, i18n.t('errors.rssExist'));

  const validate = (url) => schema.validate(url);

  return validate;
};
