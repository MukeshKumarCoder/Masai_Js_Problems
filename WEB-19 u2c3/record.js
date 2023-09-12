// fill in javascript code here

let empname = document.getElementById("name");
let employeeID = document.getElementById("employeeID");
let department = document.getElementById("department");
let Experience = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

let data = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let role;

  if (Experience.value > 5) {
    role = "Senior";
  } else if (Experience.value >= 2 && Experience.value <= 5) {
    role = "Junior";
  } else {
    role = "Fresher";
  }
  let employeData = {
    name: empname.value,
    employeeID: employeeID.value,
    department: department.value,
    exp: Experience.value,
    email: email.value,
    mbl: mobile.value,
    role: role,
  };
  data.push(employeData);

  // console.log(data);

  tbody.innerHTML = "";

  data.map((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.style.cssText = "color : green ; padding : 0.5rem ; cursor: pointer"

    deleteBtn.addEventListener("click", () => {
      tbody.removeChild(tr);
    });

    deleteBtn.appendChild(td8);

    td1.innerText = ele.name;
    td2.innerText = ele.employeeID;
    td3.innerText = ele.department;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mbl;
    td7.innerText = ele.role;

    tr.append(td1, td2, td3, td4, td5, td6, td7);

    tr.appendChild(deleteBtn);
    tbody.append(tr);
  });
});
