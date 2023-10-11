  const orderButton = document.getElementById("orderButton");
  const foodImage = document.getElementById("foodImage");
  const orderId = document.getElementById("orderId");
  const foodItems = document.querySelectorAll(".food-checkbox");

  orderButton.addEventListener("click", function () {
      // Disable the button and checkboxes during the order process
      orderButton.disabled = true;
      foodItems.forEach(item => item.disabled = true);

      // Find the selected food item
      const selectedFoodItem = [...foodItems].find(item => item.checked);

      if (selectedFoodItem) {
          // Simulate an order processing with a random delay
          const delayInSeconds = Math.floor(Math.random() * 5) + 1;
          const orderIdValue = Math.floor(Math.random() * 1000);

          setTimeout(function () {
              // Show the selected food item's image and order ID
              foodImage.innerHTML = `<img src="${getImageURL(selectedFoodItem.value)}" alt="${selectedFoodItem.value}">`;
              orderId.textContent = `Order ID: ${orderIdValue}`;

              foodImage.style.display = "block";
              orderId.style.display = "block";

              // Enable the button and checkboxes again
              orderButton.disabled = false;
              foodItems.forEach(item => item.disabled = false);
          }, delayInSeconds * 1000);
      } else {
          // If no food item is selected, show an alert
          alert("Please select a food item before placing an order.");

          // Enable the button and checkboxes again
          orderButton.disabled = false;
          foodItems.forEach(item => item.disabled = false);
      }
  });

  // Function to get the image URL based on the selected food item
  function getImageURL(foodItem) {
      // Replace this with actual image URLs for your food items
      const imageUrls = {
          Burger: "burger.jpeg",
          Pizza: "pizza.jpeg",
          sandwich: "sandwich.jpeg",
        //   Sushi: "maigi.jpg",
      };

      return imageUrls[foodItem] || "placeholder_image.png";
  }

