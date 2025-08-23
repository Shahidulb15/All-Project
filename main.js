let headline = document.querySelector("#headLine");
let message = document.querySelector("#message");
let loginbutton = document.querySelector("#loginButton");

loginbutton.onclick = function () {
  let password = document.querySelector("#passWord").value.trim();
  headline.textContent = "Thank you for enter";
  if (password.length < 8) {
    message.textContent = "Weak: Password must be at least 8 characters";
    message.style.color = "red";
  } else if (
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[^a-zA-Z0-9]/.test(password)
  ) {
    message.textContent = "Medium: Include uppercase and numbers";
    message.style.color = "orange";
  } else {
    message.textContent = "Strong: good password";
    message.style.color = "green";
  }
};
