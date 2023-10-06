let root = document.getElementById("root");
let searchBtn = document.getElementById("btn");
let searchInput = document.getElementById("searchInput").value;
let filter = document.getElementById("filter");

// console.log(filter.value)
// console.log(searchInput)

async function products() {
  try {
    let res = await fetch(`https://fakestoreapi.com/products`);
    let data = await res.json();

    printData(data);
    // console.log(data)

    // if(searchInput === data.title || searchInput === data.category)
  } catch (error) {
    console.log(error);
  }
}

products();

const printData = (data) => {
  data.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "productCard");

    let priceCard = document.createElement("div");
       priceCard.setAttribute("class", "priceDetail")

    let productImg = document.createElement("img");
    productImg.src = element.image;

    let productTitle = document.createElement("h2");
    productTitle.textContent = element.title;

    let productPrice = document.createElement("p");
    productPrice.textContent = `Price : ${element.price}`;

    let productRating = document.createElement("p");
    productRating.textContent = `Rating : ${element.rating.rate}`;

    let productDes = document.createElement("p");
    productDes.textContent = element.description;
    productDes.textContent = productDes.innerText.substring(0, 100);

    priceCard.append(productPrice, productRating)
    card.append(
      productImg,
      productTitle,
      priceCard,
      productDes
    );
    root.append(card);
  });
};
