const buildAboutSection = () => {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  // About section title
  const aboutPageTitle = document.createElement("h2");
  aboutPageTitle.innerText = "About Us";
  aboutPageTitle.classList.add("about-page-title");
  aboutContainer.appendChild(aboutPageTitle);

  // About Us Card
  const card = document.createElement("article");
  card.classList.add("about-us-card");
  aboutContainer.appendChild(card);

  // Our Restaurant
  const restaurantDetails = document.createElement("div");
  restaurantDetails.classList.add("about-our-restaurant-container");

  /* Our Compromise */
  const compromiseContainer = document.createElement("div");
  compromiseContainer.classList.add("compromise-container");
  const compromiseHeading = document.createElement("h3");
  compromiseHeading.innerText = "Our Compromise";
  const compromiseText = document.createElement("p");
  compromiseText.innerText =
    "At Obsidian Plates Restaurant, we combine traditional recipes with a modern twist. We work directly with local farmers to ensure daily freshness.";
  compromiseContainer.append(compromiseHeading, compromiseText);

  /* Our team */
  const teamContainer = document.createElement("div");
  const teamHeading = document.createElement("h3");
  teamHeading.innerText = "The Artisans of Obsidian";
  const teamText = document.createElement("p");
  teamText.innerText =
    "Just like the volcanic stone that inspires our name, our culinary team works with fire, precision, and raw passion. Led by Executive Chef Marcus Vance, our kitchen shapes raw, premium ingredients into striking culinary art.Alongside him, Head Pastry Chef Elena Rossi crafts delicate desserts that contrast beautifully with our dark, sleek aesthetic. Together with our front-of-house team, they ensure that every detail on your plate is sharp, refined, and unforgettable.";
  teamContainer.append(teamHeading, teamText);

  // Contacts
  const contactsContainer = document.createElement("div");
  const contactsHeading = document.createElement("h3");
  contactsHeading.innerText = "How to reach us";
  const contacts = document.createElement("ul");
  // Contact information
  const address = document.createElement("li");
  address.innerText =
    "789 Volcanic Avenue, Suite 100, Downtown Financial District";
  const phone = document.createElement("li");
  phone.innerText = "+1 (555) 627-4342 ";
  const email = document.createElement("li");
  email.innerText = "reservations@obsidianplates.com";
  contacts.append(address, phone, email);
  contactsContainer.append(contactsHeading, contacts);

  // Schedule
  const scheduleContainer = document.createElement("div");
  const scheduleHeading = document.createElement("h3");
  scheduleHeading.innerText = "Business Hours";
  const scheduleHours = document.createElement("ul");
  const schedule1 = document.createElement("li");
  schedule1.innerText = "Monday - Thursday: 5:00 PM - 10:30 PM";
  const schedule2 = document.createElement("li");
  schedule2.innerText = "Friday - Saturday: 5:00 PM - 11:30 PM";
  const schedule3 = document.createElement("li");
  schedule3.innerText = "Sunday: Closed (For private events)";
  scheduleHours.append(schedule1, schedule2, schedule3)
  scheduleContainer.append(scheduleHeading, scheduleHours)

  restaurantDetails.append(compromiseContainer, teamContainer, contactsContainer, scheduleContainer);

  card.appendChild(restaurantDetails);

  return aboutContainer;
};

export default buildAboutSection;
