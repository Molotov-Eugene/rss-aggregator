export default (elements, error) => {
  elements.feedback.textContent = error;
  elements.input.classList.remove('is-invalid');
  if (error !== '') {
    elements.feedback.classList.remove('text-success');
    elements.feedback.classList.add('text-danger');
    elements.input.classList.add('is-invalid');
  }
};
