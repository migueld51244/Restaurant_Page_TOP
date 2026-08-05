// Import JS Modules
import buildHomeSection from "./modules/home.js";
import buildMenuSection from "./modules/menu.js";
import buildAboutSection from "./modules/about.js";

// Imported CSS Files
import "./styles/styles.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";

const content = document.querySelector("#content");

function loadPage(page) {
  // Clear content div
  content.replaceChildren();

  const pageContent = page();
  content.appendChild(pageContent);
}

// Navbar event listeners
document.querySelector(".home-btn").addEventListener("click", () => {
  loadPage(buildHomeSection);
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  loadPage(buildMenuSection);
});

document.querySelector(".about-btn").addEventListener("click", () => {
  loadPage(buildAboutSection);
});

// Initial Home Page
loadPage(buildHomeSection);

// Home page buttons event listeners
document.querySelector(".view-menu-btn").addEventListener("click", () => {
  loadPage(buildMenuSection);
});

document.querySelector(".about-us-btn").addEventListener("click", () => {
  loadPage(buildAboutSection);
});
