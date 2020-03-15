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

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();
  if (username.value === '') {
    showError(username, 'Ce champ est requis');
  } else {
    showSuccess(username);
  }

  if (username.value === '') {
    showError(username, 'Ce champ est requis');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Ce champ est requis');
  } else if (!isValidEmail(email.value)) {
    showError(email, "Vérifiez votre email, il n'est pas valide");
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Ce champ est requis');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Ce champ est requis');
  } else {
    showSuccess(password2);
  }
});
