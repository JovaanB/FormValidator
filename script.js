const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

// Show input success message
const showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// Check email is valid
const isValidEmail = email => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

// Check required fields
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `Ce champ est requis.`);
    } else {
      showSuccess(input);
    }
  });
};

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
