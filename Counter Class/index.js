let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let startBtn = document.getElementById("start");
let counter = document.querySelector(".counter");

let flag = false;
let timer = null;

let value = parseInt(counter.innerText);

let startCounter = () => {
  timer = setInterval(() => {
    value++;
    counter.innerText = value;
  }, 1000);
};
start.addEventListener("click", () => {
  if (flag === false) {
    flag = true;
    startCounter();
    startBtn.innerHTML = "Stop";
  } else {
    flag = false;
    clearInterval(timer);
    startBtn.innerHTML = "Start";
  }
});

increment.addEventListener("click", () => {
  clearInterval(timer);
  value += 1;
  counter.innerText = value;
});

decrement.addEventListener("click", () => {
  clearInterval(timer);
  value -= 1;
  counter.innerText = value;
});
