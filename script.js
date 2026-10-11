const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    themeIcon.textContent = '🌙';
  } else {
    html.dataset.theme = 'dark';
    themeIcon.textContent = '☀️';
  }
});

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  statusEl.textContent = '';

  let hasError = false;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    hasError = true;
  }

  const email = emailInput.value.trim();
  const atPosition = email.indexOf('@');
  const goodEnding =
    email.endsWith('.com') ||
    email.endsWith('.kz') ||
    email.endsWith('.ru') ||
    email.endsWith('.org') ||
    email.endsWith('.net');

  if (email === '') {
    emailError.textContent = 'Please enter your email address.';
    hasError = true;
  } else if (atPosition < 1 || !goodEnding) {
    emailError.textContent = 'This email looks wrong. Check the format and the ending, for example name@gmail.com.';
    hasError = true;
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Please write a message.';
    hasError = true;
  }

  if (hasError) {
    return;
  }

  statusEl.textContent = 'Thank you, ' + nameInput.value.trim() + '! Your message was sent.';
  statusEl.classList.add('ok');
  form.reset();
});
