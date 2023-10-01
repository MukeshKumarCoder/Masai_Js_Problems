
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
  counter.stop();
  counter.displayCount();
});

document.getElementById("decrement").addEventListener("click", () => {
  counter.decrement();
  counter.stop();
  counter.displayCount();
});



counter.displayCount();

