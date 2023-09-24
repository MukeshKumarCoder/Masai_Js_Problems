let task = document.getElementById("task");
let priority = document.getElementById("priority");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");


let data = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();

  let todoData = {
    task: task.value,
    priority: priority.value,
  };

  data.push(todoData);

  console.log(todoData)

  tbody.innerHTML = "";


  data.map((ele) =>{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    let favBtn = document.createElement("button");

    favBtn.innerText = "Favourite";

    favBtn.style.cssText = "color: #fff; padding: 0.5rem; background-color: red; border: none"

    // favBtn.style.backgroundColor

    favBtn.addEventListener("click", () =>{
        alert("we will implement this tomorrow");
    });

    td3.appendChild(favBtn);
    
    td1.innerText = ele.task;
    td2.innerText = ele.priority;
    
    tr.append(td1, td2);
    tr.appendChild(favBtn);
    tbody.append(tr);
    
    // if(priority.value === "High"){
    //     td2.style.backgroundColor = "red"
    // }
    // else{
    //     td2.style.backgroundColor = "green"
    // }
  }); 
  task.value = "";
  priority.value = ""
});

