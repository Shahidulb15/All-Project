let headline = document.querySelector("#headLine");
let message = document.querySelector("#message");
let loginbutton = document.querySelector("#loginButton");

loginbutton.onclick = function () {
  let password = document.querySelector("#passWord").value.trim();
  headline.textContent = "Welcome";
};
