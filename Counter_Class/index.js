// class Counter {
//   constructor(){
//     this.displayCounter = document.querySelector(".Counter");
//     this.count = 0;
//     this. timer = null;
//   }

//   strarCount(){
//     this.displayCounter.innerText = this.count++;

//   }
//   autoStart(){
//     this.timer = setInterval(this.strarCount.call(this), 1000)
//   }
//   stopCount(){
//     clearInterval(this.timer);
//   }
//   increment(){
//     this.stopCount();
//     this.displayCounter.innerText = this.count++;
//   }
//   decrement(){
//     this.stopCount();
//     this.displayCounter.innerText = this.count--;
//   }
// }

// let myCounter = new Counter();

// <h1>Automatic Counter</h1>
// <p id="countDisplay">Count: 0</p>
// <button id="startButton">Start</button>
// <button id="stopButton">Stop</button>

class Counter {
  constructor() {
    this.count = 0;
    this.intervalId = null;
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.increment();
        this.displayCount();
      }, 1000); // Increment count every 1 second
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  displayCount() {
    document.querySelector(
      ".CounterDisplay"
    ).textContent = `Count: ${this.count}`;
  }
}

const counter = new Counter();

document.getElementById("startBtn").addEventListener("click", () => {
  counter.start();
});

document.getElementById("stopBtn").addEventListener("click", () => {
  counter.stop();
});

document.getElementById("increment").addEventListener("click", () => {
  counter.increment();
  counter.displayCount();
});

document.getElementById("decrement").addEventListener("click", () => {
  counter.decrement();
  counter.displayCount();
});



counter.displayCount();
