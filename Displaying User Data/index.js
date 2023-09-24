let btn = document.getElementById("btn");
let root = document.getElementById("root");

btn.addEventListener("click", () => {
  fetch("https://reqres.in/api/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      userData(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

function userData(data) {
  data.forEach((element) => {
    let card = document.createElement("div");
      card.setAttribute("class", "card")

    let userId = document.createElement("p");
    userId.textContent = element.id;
    let userEmail = document.createElement("p");
    userEmail.textContent = element.email;
    let userImg = document.createElement("img");
    userImg.src = element.avatar;
    let userFirstName = document.createElement("h2");
    userFirstName.textContent = element.first_name;
    let userLastName = document.createElement("h2");
    userLastName.textContent = element.last_name;

    card.append(userImg, userFirstName, userLastName, userEmail, userId);

    root.append(card);
  });
}
