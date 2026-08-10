// Import images
import foodImage1 from "../assets/images/food-dishes/food-1.jpg";
import foodImage2 from "../assets/images/food-dishes/food-2.jpg";
import foodImage3 from "../assets/images/food-dishes/food-3.jpg";
import foodImage4 from "../assets/images/food-dishes/food-4.jpg";
import foodImage5 from "../assets/images/food-dishes/food-5.jpg";
import foodImage6 from "../assets/images/food-dishes/food-6.jpg";
import leftSidebarImg from "../assets/images/menu-section-left-panel-img.png";
import rightSidebarImg from "../assets/images/menu-section-right-panel-img.png";

// Dishes data
const dishesData = [
  {
    img: foodImage1,
    name: "Asparagus & Parmesan Spring Salad",
    desc: "A light and crisp salad featuring fresh mixed greens, roasted asparagus spears, and generous shavings of aged Parmesan cheese, lightly dressed with a lemon vinaigrette.",
    price: "$12.50",
  },
  {
    img: foodImage2,
    name: "Herb-Roasted Salmon with Quinoa",
    desc: "A perfectly flaky, herb-crusted salmon fillet served over a bed of fluffy, nutty quinoa. Accompanied by tender steamed broccoli and topped with toasted sliced almonds.",
    price: "$23.99",
  },
  {
    img: foodImage3,
    name: "Sweet Potato & Wild Rice Power Bowl",
    desc: "A hearty, plant-based bowl featuring a mix of wild and brown rice, topped with savory roasted sweet potatoes, hearty beans or mushrooms, and a fresh garnish of cilantro.",
    price: "$14.95",
  },
  {
    img: foodImage4,
    name: "Harvest Chicken & Veggie Plate",
    desc: "Tender, oven-baked chicken pieces served alongside colorful roasted sweet potatoes and broccoli florets, finished with a sprinkle of dried cranberries for a touch of tart sweetness.",
    price: "$18.79",
  },
  {
    img: foodImage5,
    name: "Mediterranean Zucchini Ribbon Salad",
    desc: "A vibrant, low-carb dish consisting of grilled zucchini ribbons, roasted cherry tomatoes, and sautéed onions, all beautifully garnished with fresh basil leaves.",
    price: "$13.75",
  },
  {
    img: foodImage6,
    name: "Rustic Roasted Potato Wedges",
    desc: "Golden, crispy roasted potato wedges tossed with blistered cherry tomatoes, thinly sliced red onion rings, and aromatic herbs. Perfect as a hearty side or a shareable appetizer.",
    price: "$9.50",
  },
];

const buildMenuSection = () => {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-container");
  document.querySelector("#content").appendChild(menuDiv);

  // Data container
  const dataContainer = document.createElement("div");
  dataContainer.classList.add("data-container");
  menuDiv.appendChild(dataContainer);

  // Section Title
  const title = document.createElement("h2");
  title.classList.add("menu-page-title");
  title.innerText = "Our great menu";
  dataContainer.appendChild(title);

  // Section images
  const leftImage = document.createElement("img");
  leftImage.src = leftSidebarImg;
  leftImage.classList.add("left-side-img");
  const rightImage = document.createElement("img");
  rightImage.src = rightSidebarImg;
  rightImage.classList.add("right-side-img");

  dataContainer.append(leftImage, rightImage);

  // Section description
  const description = document.createElement("h3");
  description.innerText =
    "Come hungry, leave happy. Check out our favorites below.";
  description.classList.add("menu-page-desc");
  dataContainer.appendChild(description);

  // Food Section Container
  const foodContainer = document.createElement("main");
  foodContainer.classList.add("food-section");
  menuDiv.appendChild(foodContainer);

  // Food Section Title
  const foodTitle = document.createElement("h3");
  foodTitle.classList.add("food-section-title");
  foodTitle.innerText = "Tasty dishes";
  foodContainer.appendChild(foodTitle);

  // Dishes container
  const dishesContainer = document.createElement("div");
  dishesContainer.classList.add("dishes-container");
  foodContainer.appendChild(dishesContainer);

  // Container for each dish
  // Dish 1
  dishesData.forEach((dish) => {
    const item = document.createElement("div");
    item.classList.add("dish-item");
    dishesContainer.appendChild(item);

    const dishImg = document.createElement("img");
    dishImg.classList.add("dish-image");
    dishImg.src = dish.img;
    dishImg.draggable = false;

    const dishName = document.createElement("h4");
    dishName.classList.add("dish-name");
    dishName.innerText = dish.name
    ;
    const dishDescription = document.createElement("p");
    dishDescription.classList.add("dish-description");
    dishDescription.innerText = dish.desc;

    const dishPrice = document.createElement("p");
    dishPrice.classList.add("dish-price");
    dishPrice.innerText = dish.price;
    item.append(dishImg, dishName, dishDescription, dishPrice);
  });

  return menuDiv;
};

export default buildMenuSection;
