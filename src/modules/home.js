// Import images
import sideBarImage from "../assets/images/side-home-image.png";
import starImage from "../assets/images/5-star.png";

// DOM helper function
import { createEl } from "../utils/dom.js";

const buildHomeSection = () => {
  // Generate Section
  const mainDiv = createEl("div", "container");
  const textContainer = createEl("div", "head-text-container");
  mainDiv.appendChild(textContainer);

  // Create Title
  const pageTitle = createEl(
    "h2",
    "home-title",
    "it's not just Food, it's an Experience.",
  );
  textContainer.appendChild(pageTitle);

  // Create description text
  const pageText = createEl(
    "p",
    "home-text",
    "Come taste fresh plates made with love, share happy moments with friends, and enjoy a warm space that feels like home.",
  );
  textContainer.appendChild(pageText);

  // Create Buttons
  const viewMenuBtn = createEl("button", "view-menu-btn", "View Menu");
  const aboutUsBtn = createEl("button", "about-us-btn", "About Us");
  const buttonsContainer = createEl("div", "buttons-container");
  textContainer.appendChild(buttonsContainer);
  buttonsContainer.append(viewMenuBtn, aboutUsBtn);

  // Create Rating container
  const ratingContainer = createEl("div", "rating-container");
  mainDiv.appendChild(ratingContainer);

  // Rating Text
  const ratingText = createEl(
    "p",
    "rating-text",
    "Rated 5 stars on TripAdvisor",
  );
  ratingContainer.appendChild(ratingText);

  // Side Container
  const sideContainer = createEl("aside", "side-container");
  mainDiv.appendChild(sideContainer);

  // Side Image Creation
  const sideImage = createEl("img", "side-img");
  sideImage.alt =
    "A seared steak topped with fresh herbs and peppercorns, served with a dark glaze on a matte black plate.";
  sideImage.src = sideBarImage;
  sideContainer.appendChild(sideImage);

  // Announcement Text
  const announcement = createEl(
    "p",
    "announcement-text",
    "✨ Open for Weekend Brunch | 11 AM - 3 PM",
  );
  sideContainer.appendChild(announcement);

  // Star Image Creation
  const stars = createEl("img", "stars-img");
  stars.src = starImage;
  stars.alt = "A yellow 5-star icon";
  ratingContainer.appendChild(stars);

  return mainDiv;
};

export default buildHomeSection;
