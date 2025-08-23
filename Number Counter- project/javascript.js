let increment = document.querySelector("#increase");
let decrement = document.querySelector("#decrease");
let counter = document.querySelector("#counter");
let count = 0;

increment.onclick = function () {
  count++;
  counter.textContent = count; // Update the displayed count
};
decrement.onclick = function () {
  count--;
  counter.textContent = count; // Update the displayed count
};
