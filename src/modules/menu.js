// Import images
import foodImage1 from "../assets/images/food-dishes/food-1.jpg";
import foodImage2 from "../assets/images/food-dishes/food-2.jpg";
import foodImage3 from "../assets/images/food-dishes/food-3.jpg";
import foodImage4 from "../assets/images/food-dishes/food-4.jpg";
import foodImage5 from "../assets/images/food-dishes/food-5.jpg";
import foodImage6 from "../assets/images/food-dishes/food-6.jpg";
import leftSidebarImg from "../assets/images/menu-section-left-panel-img.png";
import rightSidebarImg from "../assets/images/menu-section-right-panel-img.png";

// DOM helper function
import { createEl } from "../utils/dom.js";

// Dishes data
const menuData = [
  [
    {
      img: foodImage1,
      alt: "Top-down view of a white plate on a white surface, holding a fresh green salad made of roasted asparagus spears, mixed greens, and large parmesan cheese shavings.",
      name: "Asparagus & Parmesan Spring Salad",
      desc: "A light and crisp salad featuring fresh mixed greens, roasted asparagus spears, and generous shavings of aged Parmesan cheese, lightly dressed with a lemon vinaigrette.",
      price: "$12.50",
    },
    {
      img: foodImage2,
      alt: "Top-down view of a white plate set against a bright orange background, featuring a cooked, herb-topped salmon fillet resting on a bed of quinoa, served with steamed broccoli and sliced almonds. A silver fork rests to the right of the plate.",
      name: "Herb-Roasted Salmon with Quinoa",
      desc: "A perfectly flaky, herb-crusted salmon fillet served over a bed of fluffy, nutty quinoa. Accompanied by tender steamed broccoli and topped with toasted sliced almonds.",
      price: "$23.99",
    },
    {
      img: foodImage3,
      alt: "Top-down view of a white bowl resting on a blue kitchen towel, containing a hearty mix of dark wild rice, white rice, roasted sweet potato chunks, and a garnish of fresh cilantro.",
      name: "Sweet Potato & Wild Rice Power Bowl",
      desc: "A hearty, plant-based bowl featuring a mix of wild and brown rice, topped with savory roasted sweet potatoes, hearty beans or mushrooms, and a fresh garnish of cilantro.",
      price: "$14.95",
    },
    {
      img: foodImage4,
      alt: "Top-down view of a white plate on a vibrant green background, showing cooked chicken pieces alongside broccoli florets, roasted sweet potatoes, and dried cranberries. A fork is placed on the right side of the plate.",
      name: "Harvest Chicken & Veggie Plate",
      desc: "Tender, oven-baked chicken pieces served alongside colorful roasted sweet potatoes and broccoli florets, finished with a sprinkle of dried cranberries for a touch of tart sweetness.",
      price: "$18.79",
    },
    {
      img: foodImage5,
      alt: "Top-down view of a rustic blue speckled bowl filled with folded, cooked zucchini ribbons, roasted red tomatoes, and sautéed onions, topped with fresh green basil leaves.",
      name: "Mediterranean Zucchini Ribbon Salad",
      desc: "A vibrant, low-carb dish consisting of grilled zucchini ribbons, roasted cherry tomatoes, and sautéed onions, all beautifully garnished with fresh basil leaves.",
      price: "$13.75",
    },
    {
      img: foodImage6,
      alt: "Top-down view of a dark gray plate on a textured, dark background, piled with seasoned golden roasted potato wedges, blistered cherry tomatoes, and thin red onion rings.",
      name: "Rustic Roasted Potato Wedges",
      desc: "Golden, crispy roasted potato wedges tossed with blistered cherry tomatoes, thinly sliced red onion rings, and aromatic herbs. Perfect as a hearty side or a shareable appetizer.",
      price: "$9.50",
    },
  ],
  {
    rightSidebarImgAlt:
      "Top-down view of a white plate featuring a thick, grilled steak with prominent grill marks and a sprinkle of fresh herbs. It is served alongside a vibrant green arugula salad, roasted cherry tomatoes, and a charred lemon slice, all set against a solid black background.",
    leftSidebarImgAlt:
      "A close-up shot of a fresh, bright green sprig of parsley resting delicately on the tines of a black plastic fork, set against a dark background.",
  },
];

const buildMenuSection = () => {
  const menuDiv = createEl("div", { cls: "menu-container" });

  // Data container
  const dataContainer = createEl("div", { cls: "data-container" });
  menuDiv.append(dataContainer);

  // Section Title
  const title = createEl("h2", {
    cls: "menu-page-title",
    text: "Our great menu",
  });
  dataContainer.append(title);

  // Section images
  const leftImage = createEl("img", {
    cls: "left-side-img",
    attrs: { alt: menuData[1].leftSidebarImgAlt, src: leftSidebarImg },
  });

  const rightImage = createEl("img", {
    cls: "right-side-img",
    attrs: { alt: menuData[1].rightSidebarImgAlt, src: rightSidebarImg },
  });

  dataContainer.append(leftImage, rightImage);

  // Section description
  const description = createEl("h3", {
    cls: "menu-page-desc",
    text: "Come hungry, leave happy. Check out our favorites below.",
  });
  dataContainer.append(description);

  // Food Section Container
  const foodContainer = createEl("main", { cls: "food-section" });
  menuDiv.append(foodContainer);

  // Food Section Title
  const foodTitle = createEl("h3", {
    cls: "food-section-title",
    text: "Tasty dishes",
  });
  foodContainer.append(foodTitle);

  // Dishes container
  const dishesContainer = createEl("div", { cls: "dishes-container" });
  foodContainer.append(dishesContainer);

  // Container for each dish
  menuData[0].forEach((dish) => {
    const item = createEl("div", { cls: "dish-item" });
    dishesContainer.append(item);

    const dishImg = createEl("img", {
      cls: "dish-image",
      attrs: { alt: dish.alt, src: dish.img, draggable: false },
    });

    const dishName = createEl("h4", { cls: "dish-name", text: dish.name });

    const dishDescription = createEl("p", {
      cls: "dish-description",
      text: dish.desc,
    });

    const dishPrice = createEl("p", { cls: "dish-price", text: dish.price });
    item.append(dishImg, dishName, dishDescription, dishPrice);
  });

  // Section footer
  const footer = createEl("p", {
    cls: "footer",
    text: "Obsidian Plates Restaurant - 2026",
  });

  foodContainer.append(footer);

  return menuDiv;
};

export default buildMenuSection;
