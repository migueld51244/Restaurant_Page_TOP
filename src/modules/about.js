// Import images
import footerImage from "../assets/images/about-us-card-footer.png";

// DOM helper function
import { createEl } from "../utils/dom.js";

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
  {
    contacts: [
      "789 Volcanic Avenue, Suite 100, Downtown Financial District",
      "+1 (555) 627-4342",
      "reservations@obsidianplates.com",
    ],
  },
  {
    schedules: [
      "Monday - Thursday: 5:00 PM - 10:30 PM",
      "Friday - Saturday: 5:00 PM - 11:30 PM",
      "Sunday: Closed (For private events)",
    ],
  },
  {
    footerAlt:
      "A dark, textured banner featuring the words 'OBSIDIAN PLATES RESTAURANT' in elegant gold lettering. Centered above the text is a matching gold logo depicting a stylized, geometric plate next to a fork and knife.",
  },
];

const buildAboutSection = () => {
  const aboutDiv = createEl("div", "about-container");

  // About section title
  const aboutPageTitle = createEl("h2", "about-page-title", "About Us");
  aboutDiv.appendChild(aboutPageTitle);

  // About Us Card
  const card = createEl("article", "about-us-card");
  aboutDiv.appendChild(card);

  // Our Restaurant
  const restaurantDetails = createEl("div", "about-our-restaurant-container");

  // Our Compromise
  const compromiseContainer = createEl("div", "compromise-container");
  const compromiseHeading = createEl("h3", null, "Our Compromise");
  const compromiseFrag = document.createDocumentFragment();
  aboutData[0].compromiseText.forEach((text) => {
    const p = createEl("p", null, text);
    compromiseFrag.appendChild(p);
  });
  compromiseContainer.append(compromiseHeading, compromiseFrag);

  // Our team
  const teamContainer = createEl("div", "team-container");
  const teamHeading = createEl("h3", null, "The Artisans of Obsidian");
  const teamFrag = document.createDocumentFragment();
  aboutData[1].teamText.forEach((text) => {
    const p = createEl("p", null, text);
    teamFrag.appendChild(p);
  });
  teamContainer.append(teamHeading, teamFrag);

  // Contacts
  const contactsContainer = createEl("div", "contacts-container");
  const contactsHeading = createEl("h3", null, "How to reach us");
  const contacts = createEl("ul");
  // Contact information
  const contactsFrag = document.createDocumentFragment();
  aboutData[2].contacts.forEach((info) => {
    const el = createEl("li", null, info);
    contactsFrag.appendChild(el);
  });
  contacts.append(contactsFrag);
  contactsContainer.append(contactsHeading, contacts);

  // Schedule
  const scheduleContainer = createEl("div", "schedule-container");
  const scheduleHeading = createEl("h3", null, "Business Hours");
  const scheduleHours = createEl("ul");
  const scheduleFrag = document.createDocumentFragment();
  aboutData[3].schedules.forEach((schedule) => {
    const el = createEl("li", null, schedule);
    scheduleFrag.appendChild(el);
  });
  scheduleHours.append(scheduleFrag);
  scheduleContainer.append(scheduleHeading, scheduleHours);

  // Footer
  const footerContainer = createEl("footer", "footer-container");
  const footer = createEl("img", "card-footer-img");
  footer.src = footerImage;
  footer.alt = aboutData[4].footerAlt;
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
