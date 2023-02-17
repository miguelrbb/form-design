const main = document.querySelector('main');

const sendedData = document.getElementById('sended-data');

const artSection = document.getElementById('art-section');
const rocket = document.getElementById('rocket-image');
const planet = document.getElementById('planet-image');
const sun = document.getElementById('sun-image');

const formSection = document.getElementById('form-section');
const form = document.querySelector('form');
const passwordInput = document.getElementById('password-input');
const passwordButton = document.getElementById('password-button');
const confirmPasswordInput = document.getElementById('confirm-password-input');
const confirmPasswordButton = document.getElementById('confirm-password-button');



passwordButton.addEventListener('click', togglePasswordVisibility);
confirmPasswordButton.addEventListener('click', toggleConfirmPasswordVisibility);
form.addEventListener("submit", hideElements);

function togglePasswordVisibility (evt) {
  evt.preventDefault();
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

function toggleConfirmPasswordVisibility(evt) {
  evt.preventDefault();
  confirmPasswordInput.type = confirmPasswordInput.type === "password" ? "text" : "password";
}

function hideElements(evt) {
  evt.preventDefault();
  main.classList.add("expanded");
  rocket.classList.add("loading");
  planet.classList.add("loading");
  sun.classList.add("loading");
  formSection.classList.add("hidden");

  setTimeout(() => {
    sendedData.classList.remove("hidden-data");
    formSection.style.display = "none";
    artSection.style.display = "none";
  }, 11500)
}