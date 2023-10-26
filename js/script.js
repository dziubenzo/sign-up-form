const passwordField = document.querySelector('input[name="password"]');
const confirmPasswordField = document.querySelector(
  'input[name="confirm-password"]'
);
const formWrapper = document.querySelector('.form-wrapper');

formWrapper.addEventListener('keyup', (event) => {
  console.log(event.target.value);
});
