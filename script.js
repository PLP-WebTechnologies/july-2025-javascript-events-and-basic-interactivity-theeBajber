// Part 1: Event Handling
const toggleMessageBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleMessageBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});

// Part 2: Interactive Elements
// Light/Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const incrementBtn = document.getElementById("incrementBtn");
const counter = document.getElementById("counter");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// FAQ Toggle
const faqToggle = document.querySelector(".faq-toggle");
const faq = document.querySelector(".faq");

faqToggle.addEventListener("click", () => {
  faq.classList.toggle("hidden");
});

// Part 3: Form Validation
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  const formSuccess = document.getElementById("formSuccess");
  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    signupForm.reset();
  } else {
    formSuccess.textContent = "";
  }
});
