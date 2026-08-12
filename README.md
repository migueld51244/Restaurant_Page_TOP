content = """# Restaurant Page TOP

A modern single-page restaurant website built for The Odin Project using vanilla JavaScript, Webpack, and modular DOM rendering.

## Overview

`Restaurant_Page_TOP` is a responsive restaurant landing page with:

- **Dynamic page sections** for Home, Menu, and About
- **JavaScript-driven DOM creation**
- **Image asset imports** via Webpack
- **Clean module separation** for page content
- **CSS styling** split by page

This project is designed to demonstrate practical DOM manipulation and a Webpack-powered asset pipeline while keeping the code easy to read and maintain.

## Features

- **Home section:** Hero text, action buttons, and visual rating
- **Menu section:** Generated from reusable data objects
- **About section:** Structured copy, contact info, business hours, and footer imagery
- **Modular JS architecture**
- **Image alt attributes** for accessibility
- **CSS organization:** Split by page and global styles

## Project Structure

- `src/index.js` — Application bootstrap and page switching
- `src/modules/home.js` — Builds the home page content
- `src/modules/menu.js` — Builds the menu page content
- `src/modules/about.js` — Builds the about page content
- `src/utils/dom.js` — Reusable DOM helper
- `src/styles/` — Shared and page-specific CSS
- `src/template.html` — Base HTML template for Webpack
- `src/assets/` — Images and static assets

## How to Use

### 1. Install dependencies

`npm install`

### 2. Run locally

`npx webpack serve --open`

This launches the app in development mode and opens it in the browser.

### 3. Run tests

`npx test`

> Note: The current `package.json` file only includes a default test script. If you wish, you can add `dev` and `build` scripts to facilitate commands like `npm run dev` and `npm run build`.

## What I learned

- How to structure a small SPA with vanilla JS

- How to separate content into reusable modules

- How to use Webpack with CSS loaders and asset handling

- How to create DOM elements programmatically

- How to keep page switching clean using a single content container

## Improvements to make later

- add proper `npm` scripts: `dev`, `build`, and maybe `start`

- Make styles more responsive with media queries

- Improve accessibility with keyboard focus states

- Move repeated text/data into a dedicated data file

- Add a better README section for contributions or future enhancements

## Technologies

- JavaScript (ES Modules)

- Webpack

- CSS

- HTML

## Notes

Project Lesson Link -> [https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)

This repo is a great example of learning how to move from static HTML to dynamic DOM rendering while keeping the project logic organized. The next step is to make the layout fully responsive and add small UX polish like hover/focus states and consistent button behavior.
