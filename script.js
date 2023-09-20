const count = document.querySelector(".count");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const add = document.querySelector(".add");
const inputNum = document.querySelector(".form-control");
const timer = document.getElementById("timer");

increment.addEventListener("click", () => {
  document.querySelector(".count").innerHTML++;
});

decrement.addEventListener("click", function () {
  document.querySelector(".count").innerHTML--;
});

function getValue() {
  let addition = document.getElementById("txt");
  let count = document.getElementById("count");
  let timer = document.getElementById("timer");
  console.log(count.innerHTML);
  console.log(addition.value);
  console.log(timer.value);
  setTimeout(() => {
    count.innerHTML =
      Number.parseInt(addition.value) + Number.parseInt(count.innerHTML);
  }, timer.value);
}
