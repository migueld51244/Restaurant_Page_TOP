// Import JS Modules
import buildHomeSection from "./modules/home.js";

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

document.querySelector(".home-btn").addEventListener("click", () => {
  loadPage(buildHomeSection);
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  loadPage();
});

document.querySelector(".about-btn").addEventListener("click", () => {
  loadPage();
});

// Initial Home Page
loadPage(buildHomeSection);
