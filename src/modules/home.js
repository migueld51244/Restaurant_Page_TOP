// Import images
import sideBarImage from "../assets/images/side-home-image.png";
import starImage from "../assets/images/5-star.png";

// DOM helper function
import { createEl } from "../utils/dom.js";

const buildHomeSection = () => {
  // Generate Section
  const mainDiv = createEl("div", { cls: "container" });
  const textContainer = createEl("div", { cls: "head-text-container" });
  mainDiv.append(textContainer);

  // Create Title
  const pageTitle = createEl("h2", {
    cls: "home-title",
    text: "it's not just Food, it's an Experience.",
  });
  textContainer.append(pageTitle);

  // Create description text
  const pageText = createEl("p", {
    cls: "home-text",
    text: "Come taste fresh plates made with love, share happy moments with friends, and enjoy a warm space that feels like home.",
  });
  textContainer.append(pageText);

  // Create Buttons
  const viewMenuBtn = createEl("button", {
    cls: "view-menu-btn",
    text: "View Menu",
  });
  const aboutUsBtn = createEl("button", {
    cls: "about-us-btn",
    text: "About Us",
  });
  const buttonsContainer = createEl("div", { cls: "buttons-container" });
  textContainer.append(buttonsContainer);
  buttonsContainer.append(viewMenuBtn, aboutUsBtn);

  // Create Rating container
  const ratingContainer = createEl("div", { cls: "rating-container" });
  mainDiv.append(ratingContainer);

  // Rating Text
  const ratingText = createEl("p", {
    cls: "rating-text",
    text: "Rated 5 stars on TripAdvisor",
  });
  ratingContainer.append(ratingText);

  // Side Container
  const sideContainer = createEl("aside", { cls: "side-container" });
  mainDiv.append(sideContainer);

  // Side Image Creation
  const sideImage = createEl("img", {
    cls: "side-img",
    attrs: {
      alt: "A seared steak topped with fresh herbs and peppercorns, served with a dark glaze on a matte black plate.",
      src: sideBarImage,
    },
  });
  sideContainer.append(sideImage);

  // Announcement Text
  const announcement = createEl("p", {
    cls: "announcement-text",
    text: "✨ Open for Weekend Brunch | 11 AM - 3 PM",
  });
  sideContainer.append(announcement);

  // Star Image Creation
  const stars = createEl("img", {
    cls: "stars-img",
    attrs: { alt: "A yellow 5-star icon", src: starImage },
  });
  ratingContainer.append(stars);

  return mainDiv;
};

export default buildHomeSection;
