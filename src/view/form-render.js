export default (elements, error) => {
  elements.feedbackArea.textContent = error;
  elements.inputFieldElement.classList.remove('is-invalid');
  if (error !== '') {
    elements.inputFieldElement.classList.add('is-invalid');
  }
};
