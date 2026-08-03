// Import images
import sideBarImage from "../assets/images/side-home-image.png";
import starImage from "../assets/images/5-star.png";

const buildHomeSection = () => {
  // Clear Section
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // Generate Section
  const mainDiv = document.createElement("div");
  mainDiv.classList = "container";
  const textContainer = document.createElement("div");
  textContainer.classList.add("head-text-container");
  mainDiv.appendChild(textContainer);

  // Create Title
  const pageTitle = document.createElement("h1");
  pageTitle.innerText = "it's not just Food, it's an Experience.";
  pageTitle.classList.add("home-title");
  textContainer.appendChild(pageTitle);

  // Create description text
  const pageText = document.createElement("p");
  pageText.innerText =
    "Come taste fresh plates made with love, share happy moments with friends, and enjoy a warm space that feels like home.";
  pageText.classList.add("home-text");
  textContainer.appendChild(pageText);

  // Create Buttons
  const viewMenuBtn = document.createElement("button");
  const aboutUsBtn = document.createElement("button");
  viewMenuBtn.classList.add("view-menu-btn");
  aboutUsBtn.classList.add("about-us-btn");
  viewMenuBtn.innerText = "View Menu";
  aboutUsBtn.innerText = "About Us";
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");
  textContainer.appendChild(buttonsContainer);
  buttonsContainer.append(viewMenuBtn, aboutUsBtn);

  // Create Rating container
  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("rating-container");
  mainDiv.appendChild(ratingContainer);

  // Rating Text
  const ratingText = document.createElement("p");
  ratingText.classList.add("rating-text");
  ratingText.innerText = "Rated 5 stars on TripAdvisor";
  ratingContainer.appendChild(ratingText);

  // Side Container
  const sideContainer = document.createElement("aside");
  sideContainer.classList.add("side-container");
  mainDiv.appendChild(sideContainer);

  // Side Image Creation
  const sideImage = document.createElement("img");
  sideImage.classList.add("side-img");
  sideImage.src = sideBarImage;
  sideContainer.appendChild(sideImage);

  // Announcement Text
  const announcement = document.createElement("p");
  announcement.classList.add("announcement-text");
  announcement.innerText = "✨ Open for Weekend Brunch | 11 AM - 3 PM";
  sideContainer.appendChild(announcement);

  // Star Image Creation
  const stars = document.createElement("img");
  stars.src = starImage;
  stars.classList.add("stars-img");
  ratingContainer.appendChild(stars);

  content.appendChild(mainDiv);
};

export default buildHomeSection;
