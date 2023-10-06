let burgur = document.getElementById("burgur");
let pizza = document.getElementById("pizza");
let sandwich = document.getElementById("sandwich");
let orderBtn = document.getElementById("btn");
// let burgurimg = document.getElementById("burgurimg");
// let pizzaimg = document.getElementById("pizzaimg");
// let sandwichimg = document.getElementById("sandwichimg");
let image = document.getElementById("image");
let randomId = document.getElementById("randomId");
let h1 = document.getElementById("h1");

orderBtn.addEventListener("click", () => {
  if (item.length == 0) {
    alert("please select Atleast one food");
  }
  else{
    
  }
  const myPromise = new Promise((res) => {
    setTimeout(() => {
      res();
    }, randomTime(5, 10) * 500);
  }).then(() => {
    


    h1.innerText = `Order id : ${randomOrderId()}`
  });
});

function randomTime(min, max){
     return Math.floor(Math.random() * (max - min) + 1); 
};

function randomOrderId(){
    return Math.floor(Math.random() * 1000 + 1)
};


