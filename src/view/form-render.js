export default (elements, error, i18n) => {
  const errorList = {
    required: i18n.t('errors.required'),
    rssExist: i18n.t('errors.rssExist'),
    badRSS: i18n.t('errors.badRSS'),
    invalidURL: i18n.t('errors.url'),
    network: i18n.t('errors.network'),
  };

  elements.feedback.textContent = errorList[error] || error;
  elements.input.classList.remove('is-invalid');
  if (error !== '') {
    elements.feedback.classList.remove('text-success');
    elements.feedback.classList.add('text-danger');
    elements.input.classList.add('is-invalid');
  }
};
