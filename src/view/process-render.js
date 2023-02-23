export default (elements, formState, i18n) => {
  switch (formState) {
    case 'sending':
      elements.input.setAttribute('readonly', true);
      elements.button.disabled = true;
      break;
    case 'error':
      elements.input.removeAttribute('readonly');
      elements.button.disabled = false;
      break;
    case 'recieved':
      elements.input.removeAttribute('readonly');
      elements.button.disabled = false;
      elements.feedback.textContent = i18n.t('recieved');
      elements.feedback.classList.remove('text-danger');
      elements.feedback.classList.add('text-success');
      elements.form.reset();
      break;
    default:
      throw new Error(`unexpected status ${formState}`);
  }
};
