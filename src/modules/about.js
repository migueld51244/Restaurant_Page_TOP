// Import images
import footerImage from "../assets/images/about-us-card-footer.png";

// DOM helper function
import { createEl } from "../utils/dom";

// About Data
const aboutData = [
  {
    compromiseText: [
      "At Obsidian Plates Restaurant, we combine traditional recipes with a modern twist.",
      "We work directly with local farmers to ensure daily freshness.",
    ],
  },
  {
    teamText: [
      "Just like the volcanic stone that inspires our name, our culinary team works with fire, precision, and raw passion.",
      "Led by Executive Chef Marcus Vance, our kitchen shapes raw, premium ingredients into striking culinary art.",
      "Alongside him, Head Pastry Chef Elena Rossi crafts delicate desserts that contrast beautifully with our dark, sleek aesthetic.",
      "Together with our front-of-house team, they ensure that every detail on your plate is sharp, refined, and unforgettable.",
    ],
  },
];

const buildAboutSection = () => {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-container");

  // About section title
  const aboutPageTitle = document.createElement("h2");
  aboutPageTitle.textContent = "About Us";
  aboutPageTitle.classList.add("about-page-title");
  aboutDiv.appendChild(aboutPageTitle);

  // About Us Card
  const card = document.createElement("article");
  card.classList.add("about-us-card");
  aboutDiv.appendChild(card);

  // Our Restaurant
  const restaurantDetails = document.createElement("div");
  restaurantDetails.classList.add("about-our-restaurant-container");

  /* Our Compromise */
  const compromiseContainer = document.createElement("div");
  compromiseContainer.classList.add("compromise-container");
  const compromiseHeading = document.createElement("h3");
  compromiseHeading.textContent = "Our Compromise";
  const compromiseFrag = document.createDocumentFragment();
  aboutData[0].compromiseText.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    compromiseFrag.appendChild(p)
  })
  compromiseContainer.append(compromiseHeading, compromiseFrag);

  /* Our team */
  const teamContainer = document.createElement("div");
  teamContainer.classList.add("team-container");
  const teamHeading = document.createElement("h3");
  teamHeading.textContent = "The Artisans of Obsidian";
  const teamFrag = document.createDocumentFragment();
  aboutData[1].teamText.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    teamFrag.appendChild(p)
  })
  teamContainer.append(teamHeading, teamFrag);

  // Contacts
  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts-container");
  const contactsHeading = document.createElement("h3");
  contactsHeading.textContent = "How to reach us";
  const contacts = document.createElement("ul");
  // Contact information
  const address = document.createElement("li");
  address.textContent =
    "789 Volcanic Avenue, Suite 100, Downtown Financial District";
  const phone = document.createElement("li");
  phone.textContent = "+1 (555) 627-4342 ";
  const email = document.createElement("li");
  email.textContent = "reservations@obsidianplates.com";
  contacts.append(address, phone, email);
  contactsContainer.append(contactsHeading, contacts);

  // Schedule
  const scheduleContainer = document.createElement("div");
  scheduleContainer.classList.add("schedule-container");
  const scheduleHeading = document.createElement("h3");
  scheduleHeading.textContent = "Business Hours";
  const scheduleHours = document.createElement("ul");
  const schedule1 = document.createElement("li");
  schedule1.textContent = "Monday - Thursday: 5:00 PM - 10:30 PM";
  const schedule2 = document.createElement("li");
  schedule2.textContent = "Friday - Saturday: 5:00 PM - 11:30 PM";
  const schedule3 = document.createElement("li");
  schedule3.textContent = "Sunday: Closed (For private events)";
  scheduleHours.append(schedule1, schedule2, schedule3);
  scheduleContainer.append(scheduleHeading, scheduleHours);

  // Footer
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer-container");
  const footer = document.createElement("img");
  footer.classList.add("card-footer-img");
  footer.src = footerImage;
  footer.alt = "A dark, textured banner featuring the words 'OBSIDIAN PLATES RESTAURANT' in elegant gold lettering. Centered above the text is a matching gold logo depicting a stylized, geometric plate next to a fork and knife.";
  footerContainer.appendChild(footer);

  restaurantDetails.append(
    compromiseContainer,
    teamContainer,
    contactsContainer,
    scheduleContainer,
    footerContainer,
  );

  card.appendChild(restaurantDetails);

  return aboutDiv;
};

export default buildAboutSection;
