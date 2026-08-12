// Import images
import footerImage from "../assets/images/about-us-card-footer.png";

// DOM helper function
import { createEl } from "../utils/dom.js";

// About Data
const aboutData = {
  compromiseText: [
    "At Obsidian Plates Restaurant, we combine traditional recipes with a modern twist.",
    "We work directly with local farmers to ensure daily freshness.",
  ],
  teamText: [
    "Just like the volcanic stone that inspires our name, our culinary team works with fire, precision, and raw passion.",
    "Led by Executive Chef Marcus Vance, our kitchen shapes raw, premium ingredients into striking culinary art.",
    "Alongside him, Head Pastry Chef Elena Rossi crafts delicate desserts that contrast beautifully with our dark, sleek aesthetic.",
    "Together with our front-of-house team, they ensure that every detail on your plate is sharp, refined, and unforgettable.",
  ],

  contacts: [
    "789 Volcanic Avenue, Suite 100, Downtown Financial District",
    "+1 (555) 627-4342",
    "reservations@obsidianplates.com",
  ],

  schedules: [
    "Monday - Thursday: 5:00 PM - 10:30 PM",
    "Friday - Saturday: 5:00 PM - 11:30 PM",
    "Sunday: Closed (For private events)",
  ],

  footerAlt:
    "A dark, textured banner featuring the words 'OBSIDIAN PLATES RESTAURANT' in elegant gold lettering. Centered above the text is a matching gold logo depicting a stylized, geometric plate next to a fork and knife.",
};

const buildAboutSection = () => {
  const aboutDiv = createEl("div", { cls: "about-container" });

  // About section title
  const aboutPageTitle = createEl("h2", {
    cls: "about-page-title",
    text: "About Us",
  });
  aboutDiv.append(aboutPageTitle);

  // About Us Card
  const card = createEl("article", { cls: "about-us-card" });
  aboutDiv.append(card);

  // Our Restaurant
  const restaurantDetails = createEl("div", {
    cls: "about-our-restaurant-container",
  });

  // Our Compromise
  const compromiseContainer = createEl("div", { cls: "compromise-container" });
  const compromiseHeading = createEl("h3", { text: "Our Compromise" });
  const compromiseFrag = document.createDocumentFragment();
  aboutData.compromiseText.forEach((text) => {
    const p = createEl("p", { attrs: { text: text } });
    compromiseFrag.append(p);
  });
  compromiseContainer.append(compromiseHeading, compromiseFrag);

  // Our team
  const teamContainer = createEl("div", { cls: "team-container" });
  const teamHeading = createEl("h3", { text: "The Artisans of Obsidian" });
  const teamFrag = document.createDocumentFragment();
  aboutData.teamText.forEach((text) => {
    const p = createEl("p", { text: text });
    teamFrag.append(p);
  });
  teamContainer.append(teamHeading, teamFrag);

  // Contacts
  const contactsContainer = createEl("div", { cls: "contacts-container" });
  const contactsHeading = createEl("h3", { text: "How to reach us" });
  const contacts = createEl("ul");
  // Contact information
  const contactsFrag = document.createDocumentFragment();
  aboutData.contacts.forEach((info) => {
    const el = createEl("li", { text: info });
    contactsFrag.append(el);
  });
  contacts.append(contactsFrag);
  contactsContainer.append(contactsHeading, contacts);

  // Schedule
  const scheduleContainer = createEl("div", { cls: "schedule-container" });
  const scheduleHeading = createEl("h3", { text: "Business Hours" });
  const scheduleHours = createEl("ul");
  const scheduleFrag = document.createDocumentFragment();
  aboutData.schedules.forEach((schedule) => {
    const el = createEl("li", { text: schedule });
    scheduleFrag.append(el);
  });
  scheduleHours.append(scheduleFrag);
  scheduleContainer.append(scheduleHeading, scheduleHours);

  // Footer
  const footerContainer = createEl("footer", { cls: "footer-container" });
  const footer = createEl("img", {
    cls: "card-footer-img",
    attrs: { alt: aboutData.footerAlt, src: footerImage },
  });
  footerContainer.append(footer);

  restaurantDetails.append(
    compromiseContainer,
    teamContainer,
    contactsContainer,
    scheduleContainer,
    footerContainer,
  );

  card.append(restaurantDetails);

  return aboutDiv;
};

export default buildAboutSection;
