const passwordField = document.querySelector('input[name="password"]');
const confirmPasswordField = document.querySelector(
  'input[name="confirm-password"]'
);
const formWrapper = document.querySelector('.form-wrapper');
const messagePara = document.querySelector('.password-message');

formWrapper.addEventListener('keyup', (event) => {
  if (event.target === passwordField && passwordField.value) {
    messagePara.textContent = 'Password must have at least 8 characters';
  }
});
