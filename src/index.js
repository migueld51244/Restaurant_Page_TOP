// Import JS Modules
import buildHomeSection from "./modules/home.js";

// Imported CSS Files
import "./styles/styles.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";

const content = document.querySelector("#content");

function loadPage(page) {
  content.replaceChildren();
  const pageContent = page()
  content.appendChild(pageContent);
}

// Initial Home Page
loadPage(buildHomeSection);