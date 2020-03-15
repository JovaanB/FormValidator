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
const checkEmail = input => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value.trim().toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, `Email non valide.`);
  }
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

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `Minimum ${min} caractères requis.`);
  } else if (input.value.length > max) {
    showError(input, `Maximum ${max} caractères.`);
  } else {
    showSuccess(input);
  }
};

// Check passwords match
const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, `Les mots de passe ne correspondent pas.`);
  } else {
    showSuccess(input2);
  }
};

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
