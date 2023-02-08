import * as yup from 'yup';

export default (i18n) => {
  yup.setLocale({
    string: {
      required: i18n.t('required.url'),
      url: i18n.t('errors.url'),
    },
  });
  const schema = yup.string().url(i18n.t('errors.url')).required();

  const validate = (url) => schema.validate(url);

  return validate;
};
