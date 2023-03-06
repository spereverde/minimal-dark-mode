// Select the button
const btn = document.querySelector(".btn-toggle");
const btnLight = document.querySelector(".btn-light");
const btnBlue = document.querySelector(".btn-blue");
const btnGreen = document.querySelector(".btn-green");

// Listen for a click on the button
btn.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  // document.body.classList.toggle("dark");
  document.body.className = "";
  document.body.classList.add("dark");
});

btnLight.addEventListener("click", function () {
  document.body.className = "";
  document.body.classList.add("light");
});

btnBlue.addEventListener("click", function () {
  document.body.className = "";
  document.body.classList.add("blue");
});

btnGreen.addEventListener("click", function () {
  document.body.className = "";
  document.body.classList.add("green");
});
