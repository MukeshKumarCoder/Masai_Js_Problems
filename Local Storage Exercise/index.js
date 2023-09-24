let name1 = document.getElementById("name");
let age = document.getElementById("age");
let form = document.querySelector("form");
let btn = document.getElementById("btn");
let displayCard = document.querySelector(".displayCard");

let data = [];
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let formData = {
        name: name1.value,
        age: age.value,
    }
    data.push(formData);
    localStorage.setItem("user", JSON.stringify(data))

    name1.value = "";
    age.value = "";
})

btn.addEventListener("click", ()=>{
    let storeData = JSON.parse(localStorage.getItem("user"));

    storeData.forEach((ele)=>{
        let card = document.createElement("div");

        let displayName = document.createElement("h2");
              displayName.textContent = `Name is : ${ele.name}`;

        let displayAge = document.createElement("h2");
             displayAge.textContent = `Age is : ${ele.age}`;

            card.append(displayName, displayAge);
            displayCard.append(card);
            localStorage.removeItem("user")
    })
})