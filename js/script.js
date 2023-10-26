const passwordField = document.querySelector('input[name="password"]');
const confirmPasswordField = document.querySelector(
  'input[name="confirm-password"]'
);
const formWrapper = document.querySelector('.form-wrapper');
const messagePara = document.querySelector('.password-message');
const submitButton = document.querySelector('button');

formWrapper.addEventListener('keyup', (event) => {
  if (
    passwordField.value.length < 8 &&
    (passwordField.value || confirmPasswordField.value)
  ) {
    passwordField.classList.remove('wrong-passwords');
    confirmPasswordField.classList.remove('wrong-passwords');
    messagePara.classList.remove('red');
    messagePara.textContent = 'Password must have at least 8 characters';
    submitButton.setAttribute('form', 'form');
  } else if (
    passwordField.value != confirmPasswordField.value &&
    passwordField.value.length >= 8 &&
    confirmPasswordField.value.length >= 8
  ) {
    passwordField.classList.add('wrong-passwords');
    confirmPasswordField.classList.add('wrong-passwords');
    messagePara.textContent = 'Passwords do not match';
    messagePara.classList.add('red');
    submitButton.removeAttribute('form');
  } else {
    passwordField.classList.remove('wrong-passwords');
    confirmPasswordField.classList.remove('wrong-passwords');
    messagePara.classList.remove('red');
    messagePara.textContent = '';
    submitButton.setAttribute('form', 'form');
  }
});
