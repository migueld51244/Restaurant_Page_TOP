const buildAboutSection = () => {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  // About section title
  const aboutPageTitle = document.createElement("h2");
  aboutPageTitle.innerText = "About Us";
  aboutPageTitle.classList.add("about-page-title");
  aboutContainer.appendChild(aboutPageTitle);

  return aboutContainer;
};

export default buildAboutSection;
