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
  const dish1 = document.createElement("div");
  dish1.classList.add("dish-item");
  dishesContainer.appendChild(dish1);
  const dish1Img = document.createElement("img");
  dish1Img.classList.add("dish-image");
  dish1Img.src = foodImage1;
  const dish1Name = document.createElement("h4");
  dish1Name.classList.add("dish-name");
  dish1Name.innerText = "Asparagus & Parmesan Spring Salad";
  const dish1Description = document.createElement("p");
  dish1Description.classList.add("dish-description");
  dish1Description.innerText =
    "A light and crisp salad featuring fresh mixed greens, roasted asparagus spears, and generous shavings of aged Parmesan cheese, lightly dressed with a lemon vinaigrette.";
  const dish1Price = document.createElement("p");
  dish1Price.classList.add("dish-price");
  dish1Price.innerText = "$12.50";
  dish1.append(dish1Img, dish1Name, dish1Description, dish1Price);

  // Dish 2
  const dish2 = document.createElement("div");
  dish2.classList.add("dish-item");
  dishesContainer.appendChild(dish2);
  const dish2Img = document.createElement("img");
  dish2Img.classList.add("dish-image");
  dish2Img.src = foodImage2;
  const dish2Name = document.createElement("h4");
  dish2Name.classList.add("dish-name");
  dish2Name.innerText = "Herb-Roasted Salmon with Quinoa";
  const dish2Description = document.createElement("p");
  dish2Description.classList.add("dish-description");
  dish2Description.innerText =
    "A perfectly flaky, herb-crusted salmon fillet served over a bed of fluffy, nutty quinoa. Accompanied by tender steamed broccoli and topped with toasted sliced almonds.";
  const dish2Price = document.createElement("p");
  dish2Price.classList.add("dish-price");
  dish2Price.innerText = "$23.99";
  dish2.append(dish2Img, dish2Name, dish2Description, dish2Price);

  // Dish 3
  const dish3 = document.createElement("div");
  dish3.classList.add("dish-item");
  dishesContainer.appendChild(dish3);
  const dish3Img = document.createElement("img");
  dish3Img.classList.add("dish-image");
  dish3Img.src = foodImage3;
  const dish3Name = document.createElement("h4");
  dish3Name.classList.add("dish-name");
  dish3Name.innerText = "Sweet Potato & Wild Rice Power Bowl";
  const dish3Description = document.createElement("p");
  dish3Description.classList.add("dish-description");
  dish3Description.innerText =
    "A hearty, plant-based bowl featuring a mix of wild and brown rice, topped with savory roasted sweet potatoes, hearty beans or mushrooms, and a fresh garnish of cilantro.";
  const dish3Price = document.createElement("p");
  dish3Price.classList.add("dish-price");
  dish3Price.innerText = "$14.95";
  dish3.append(dish3Img, dish3Name, dish3Description, dish3Price);

  // Dish 4
  const dish4 = document.createElement("div");
  dish4.classList.add("dish-item");
  dishesContainer.appendChild(dish4);
  const dish4Img = document.createElement("img");
  dish4Img.classList.add("dish-image");
  dish4Img.src = foodImage4;
  const dish4Name = document.createElement("h4");
  dish4Name.classList.add("dish-name");
  dish4Name.innerText = "Harvest Chicken & Veggie Plate";
  const dish4Description = document.createElement("p");
  dish4Description.classList.add("dish-description");
  dish4Description.innerText =
    "Tender, oven-baked chicken pieces served alongside colorful roasted sweet potatoes and broccoli florets, finished with a sprinkle of dried cranberries for a touch of tart sweetness.";
  const dish4Price = document.createElement("p");
  dish4Price.classList.add("dish-price");
  dish4Price.innerText = "$18.79";
  dish4.append(dish4Img, dish4Name, dish4Description, dish4Price);

  // Dish 5
  const dish5 = document.createElement("div");
  dish5.classList.add("dish-item");
  dishesContainer.appendChild(dish5);
  const dish5Img = document.createElement("img");
  dish5Img.classList.add("dish-image");
  dish5Img.src = foodImage5;
  const dish5Name = document.createElement("h4");
  dish5Name.classList.add("dish-name");
  dish5Name.innerText = "Mediterranean Zucchini Ribbon Salad";
  const dish5Description = document.createElement("p");
  dish5Description.classList.add("dish-description");
  dish5Description.innerText =
    "A vibrant, low-carb dish consisting of grilled zucchini ribbons, roasted cherry tomatoes, and sautéed onions, all beautifully garnished with fresh basil leaves.";
  const dish5Price = document.createElement("p");
  dish5Price.classList.add("dish-price");
  dish5Price.innerText = "$13.75";
  dish5.append(dish5Img, dish5Name, dish5Description, dish5Price);

  // Dish 6
  const dish6 = document.createElement("div");
  dish6.classList.add("dish-item");
  dishesContainer.appendChild(dish6);
  const dish6Img = document.createElement("img");
  dish6Img.classList.add("dish-image");
  dish6Img.src = foodImage6;
  const dish6Name = document.createElement("h4");
  dish6Name.classList.add("dish-name");
  dish6Name.innerText = "Rustic Roasted Potato Wedges";
  const dish6Description = document.createElement("p");
  dish6Description.classList.add("dish-description");
  dish6Description.innerText =
    "Golden, crispy roasted potato wedges tossed with blistered cherry tomatoes, thinly sliced red onion rings, and aromatic herbs. Perfect as a hearty side or a shareable appetizer.";
  const dish6Price = document.createElement("p");
  dish6Price.classList.add("dish-price");
  dish6Price.innerText = "$9.50";
  dish6.append(dish6Img, dish6Name, dish6Description, dish6Price);

  menuDiv.querySelectorAll("img").forEach((img) => (img.draggable = false));

  return menuDiv;
};

export default buildMenuSection;

// change to array data and build dynamically the dishes and add footer
